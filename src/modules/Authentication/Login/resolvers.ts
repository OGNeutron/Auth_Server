import { AuthenticationError, ApolloError } from 'apollo-server-express';
import { comparePassword, logger, createToken } from 'scotts_utilities';

import { Context } from '../../../types';
import {
	INVALID_CREDENTIALS,
	ACCOUNT_NOT_CONFIRMED,
	ALREADY_SIGNED_IN
	// API_TOKEN_ERROR
} from '../../../constants';
import { removeAllUsersSessions } from '../../../utils';

const { JWT_TOKEN_SECRET = 'secret' } = process.env;

export const resolvers = {
	Mutation: {
		async logout(_: any, __: any, { session, redis }: Context) {
			try {
				let userId;

				if (session) {
					if (session.jwtDecodedUser) {
						userId = session.jwtDecodedUser;
					} else {
						userId = session.userId;
					}

					if (userId === undefined) {
						throw new AuthenticationError(INVALID_CREDENTIALS);
					}

					removeAllUsersSessions(userId, redis);

					session.destroy((error) => {
						if (error) {
							logger('Logging out').error({
								level: '5',
								message: error
							});
						}
					});

					return true;
				}

				return new AuthenticationError(INVALID_CREDENTIALS);
			} catch (error) {
				logger('Logging out').error({ level: '5', message: error });

				return new ApolloError(error);
			}
		},
		async login(_: any, args: any, { db, session }: Context) {
			try {
				// let api;
				// try {
				// 	api = await db.aPIApplications({
				// 		where: {
				// 			admin: {
				// 				id: token as any
				// 			}
				// 		}
				// 	});

				// 	if (!api) {
				// 		return new AuthenticationError(API_TOKEN_ERROR);
				// 	}
				// } catch (error) {
				// 	return new AuthenticationError(API_TOKEN_ERROR);
				// }

				const searchUser = await db.users({
					where: {
						AND: {
							email: args.email
						}
					}
				});

				const user = searchUser[0];

				if (session) {
					if (session.userId === user.id) {
						throw new ApolloError(ALREADY_SIGNED_IN);
					}
				}

				if (user.confirmed) {
					const valid = await comparePassword(
						args.password,
						user.password
					);

					if (valid) {
						session.userId = user.id;

						if (args.tokens) {
							const [ token, refreshToken ] = createToken(
								{ id: user.id },
								JWT_TOKEN_SECRET,
								'7d',
								JWT_TOKEN_SECRET,
								{ id: user.id }
							);

							console.log('TOKENS', token, refreshToken);

							if (token && refreshToken) {
								return {
									ok: true,
									user,
									token,
									refreshToken
								};
							}
						}

						return {
							ok: true,
							user
						};
					} else {
						throw new Error(INVALID_CREDENTIALS);
					}
				} else {
					throw new Error(ACCOUNT_NOT_CONFIRMED);
				}
			} catch (error) {
				logger('Login Error').error({ level: '5', message: error });

				return new AuthenticationError(error);
			}
		}
	}
};
