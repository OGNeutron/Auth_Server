import { logger, verifyToken } from 'scotts_utilities';

import { Context } from '../../types';
import { AuthenticationError, ApolloError } from 'apollo-server-core';
import { INVALID_CREDENTIALS } from '../../constants';

const { JWT_TOKEN_SECRET = 'secret' } = process.env;

export const resolvers = {
	Query: {
		me(_: any, __: any, { db, session }: Context) {
			return db.user({ id: session.userId });
		}
	},
	Mutation: {
		async checkToken(_: any, args: any, { db }: Context) {
			try {
				let decoded: any;

				if (args.token != null) {
					decoded = verifyToken(args.token, JWT_TOKEN_SECRET);
				}

				if (decoded == null) {
					throw new AuthenticationError(INVALID_CREDENTIALS);
				}

				const user = await db.user({
					email: decoded.email
				});

				if (user) {
					return {
						ok: true,
						result: `${user.username}`
					};
				} else {
					return {
						ok: true,
						result: INVALID_CREDENTIALS
					};
				}
			} catch (error) {
				logger('Forgot Password').error({ level: '5', message: error });

				return new ApolloError(error);
			}
		}
	}
};
