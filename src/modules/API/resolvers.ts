import { logger, createToken } from 'scotts_utilities';
import { ApolloError } from 'apollo-server-core';
import { randomBytes } from 'crypto';

import { Context } from '../../types';
// import { INVALID_CREDENTIALS } from '../../constants';

export const resolvers = {
	Query: {
		async fetchAPI(_: any, __: any, { db, session }: Context) {
			try {
				const api = await db.aPIApplications({
					where: {
						admin: {
							id: session.userId
						}
					}
				});

				console.log(api[0]);

				const comments = await db.comments({
					where: {
						API: {
							id: api[0].id
						}
					}
				});

				return {
					api,
					comments
				};
			} catch (error) {
				logger('API Application').error({ level: '5', message: error });

				return new ApolloError(error);
			}
		}
	},
	Mutation: {
		async createApi(_: any, args: any, { session, db }: Context) {
			try {
				const token = randomBytes(32).toString('hex');

				console.log('TOKEN', token);

				const user = await db.users({ where: { id: session.userId } });

				console.log('USER', user);

				const api = await db.createAPIApplication({
					admin: {
						connect: {
							email: user[0].email
						}
					},
					name: args.name,
					token
				});

				console.log('API', api);

				return api;
			} catch (error) {
				logger('API Application').error({ level: '5', message: error });

				return new ApolloError(error);
			}
		},
		async resetTokenAPI(_: any, __: any, { db, session }: Context) {
			try {
				const userAPI = await db.aPIApplications({
					where: { admin: { id: session.userId } }
				});

				const [ token ] = createToken({ id: session.userId }, 'secret', '');

				const api = db.updateAPIApplication({
					where: {
						id: userAPI[0].id
					},
					data: {
						token
					}
				});

				return { api };
			} catch (error) {
				logger('API Application').error({ level: '5', message: error });

				return new ApolloError(error);
			}
		}
	}
};
