import { ApolloError, AuthenticationError } from 'apollo-server-express';
import {
	comparePassword,
	hashPassword,
	generateEmailLink,
	SendMail,
	logger
} from 'scotts_utilities';

import { Context } from '../../../types';
import {
	INVALID_CREDENTIALS,
	PASSWORD_SUCCESSFULLY_CHANGED,
	FORGOT_PASSWORD_PREFIX,
	EXPIRED_KEY_ERROR
} from '../../../constants';
import { forgotPasswordSchema } from '../YupSchemas';

const {
	EMAIL_HOST = 'smtp.mailtrap.io',
	EMAIL_PORT = 2525,
	EMAIL_USER = '984c1182cd3546',
	EMAIL_PASS = 'c468fcdc66d05b'
} = process.env;

const from = 'Experimental website <scottberry91@gmail.com>';
export const resolvers = {
	Mutation: {
		async changePassword(_: any, args: any, { db }: Context) {
			try {
				const user = await db.user(args.email);

				if (!user) {
					return {
						ok: false,
						message: INVALID_CREDENTIALS
					};
				}

				if (comparePassword(args.oldPassword, user.password)) {
					return {
						ok: false,
						message: INVALID_CREDENTIALS
					};
				}

				const hashedPassword = await hashPassword(args.newPassword, 10);

				await db.updateUser({
					where: { id: user.id },
					data: { password: hashedPassword }
				});

				return {
					ok: true,
					message: PASSWORD_SUCCESSFULLY_CHANGED
				};
			} catch (error) {
				console.log(error);
				return new ApolloError(error);
			}
		},

		async forgotPassword(_: any, args: any, { db, client_origin, redis }: Context) {
			try {
				const user = await db.user(args.email);

				if (!user) {
					return new AuthenticationError(INVALID_CREDENTIALS);
				}

				await redis.set(
					`${FORGOT_PASSWORD_PREFIX}${user.id}`,
					user.id,
					'ex',
					60 * 20
				);

				const link = generateEmailLink(
					{ id: user.id, username: user.username, email: user.email },
					`${client_origin}/auth/reset_password`
				);

				const sentMail = SendMail(
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
						subject: 'Forgot Password',
						html: `
            To reset password follow this link
        
            <a href="${link}">Reset Link</a>
            `
					}
				);

				console.log('SENT MAIL', sentMail);

				if (sentMail) {
					return {
						ok: true,
						sentEmailMessage: `Send reset email to ${user.email}`,
						email: user.email
					};
				} else {
					throw new Error('Error with email');
				}
			} catch (error) {
				logger('Forgot Password').error({ level: '5', message: error });

				return new ApolloError(error);
			}
		},
		async resetPassword(_: any, args: any, { db, redis }: Context) {
			try {
				const redisKey = `${FORGOT_PASSWORD_PREFIX}${args.id}`;

				const userId = await redis.get(redisKey);

				if (!userId) {
					return {
						ok: false,
						message: EXPIRED_KEY_ERROR
					};
				}

				try {
					await forgotPasswordSchema.validate(
						{ password: args.password },
						{ abortEarly: false }
					);
				} catch (error) {
					return {
						ok: false,
						result: error
					};
				}

				const passwordHash: string = await hashPassword(args.password, 10);

				const updatedUser = db.updateUser({
					where: {
						id: userId
					},
					data: {
						password: passwordHash
					}
				});

				const deleteKey = redis.del(redisKey);

				await Promise.all([ updatedUser, deleteKey ]);

				return {
					ok: true,
					message: PASSWORD_SUCCESSFULLY_CHANGED
				};
			} catch (error) {
				logger('Forgot Password').error({ level: '5', message: error });

				return new ApolloError(error);
			}
		}
	}
};
