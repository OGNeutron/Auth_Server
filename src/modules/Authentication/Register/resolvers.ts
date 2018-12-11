import {
	hashPassword,
	generateEmailLink,
	SendMail,
	logger,
	verifyToken
} from 'scotts_utilities';
import { AuthenticationError, ApolloError } from 'apollo-server-express';

import { registerSchema } from '../YupSchemas';
import { Context } from '../../../types';
import { formatYupErrors } from '../../../utils';

import { INVALID_CREDENTIALS } from '../../../constants';

const {
	EMAIL_HOST = 'smtp.mailtrap.io',
	EMAIL_PORT = 2525,
	EMAIL_USER = '984c1182cd3546',
	EMAIL_PASS = 'c468fcdc66d05b',
	JWT_TOKEN_SECRET = 'secret'
} = process.env;

const from = 'Experimental website <scottberry91@gmail.com>';

export const resolvers = {
	Mutation: {
		async authConfirmation(_: any, args: any, { db }: Context) {
			try {
				let decoded: any;
				if (args.token != null) {
					decoded = verifyToken(args.token, JWT_TOKEN_SECRET);
				}

				console.log('DECODED', decoded);

				if (decoded == null) {
					throw new AuthenticationError(INVALID_CREDENTIALS);
				}

				const user = await db.updateUser({
					where: { id: decoded.id },
					data: {
						confirmed: true
					}
				});

				if (user) {
					return {
						ok: true,
						result: `${user.email}`
					};
				} else {
					return {
						ok: true,
						result: INVALID_CREDENTIALS
					};
				}
			} catch (error) {
				logger('Auth Confirmation Error').error({
					level: '0',
					message: error.message
				});
				return new ApolloError(error);
			}
		},
		async register(_: any, args: any, { db }: Context) {
			try {
				try {
					await registerSchema.validate(args, { abortEarly: false });
				} catch (error) {
					return new AuthenticationError(formatYupErrors(error));
				}
				const hashedPassword = await hashPassword(args.password, 10);

				const user = await db.createUser({
					username: args.username,
					email: args.email,
					password: hashedPassword,
					role: 'USER',
					avatar_url: {
						create: {
							url: '',
							filename: '',
							mimetype: '',
							encoding: '',
							key: '',
							ETag: ''
						}
					}
				});

				const link = await generateEmailLink(
					{ id: user.id, username: user.username, email: user.email },
					'http://localhost:1234/auth/confirmation'
				);

				console.log(link);

				try {
					const email = SendMail(
						{
							host: EMAIL_HOST,
							port: EMAIL_PORT as any,
							auth: {
								user: EMAIL_USER,
								pass: EMAIL_PASS
							}
						},
						{
							from,
							to: user.email,
							subject: 'Confirmation',
							html: `
              To Confirm account click on the link below
  
              <a href="${link}">Reset Link</a>
              `
						}
					);

					console.log('SENT MAIL', email);

					if (email) {
						return {
							ok: true,
							sentEmailMessage: `Send confirmation email to ${user.email}`,
							email: user.email
						};
					} else {
						return {
							ok: false
						};
					}
				} catch (error) {
					console.log(error);
					return new ApolloError(error);
				}
			} catch (error) {
				console.log(error);
				return new ApolloError(error);
			}
		}
	}
};
