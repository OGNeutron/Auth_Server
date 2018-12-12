import { ApolloError } from 'apollo-server-core';
import { Context } from '../../types';
export declare const resolvers: {
    Query: {
        fetchAPI(_: any, __: any, { db, session }: Context): Promise<ApolloError | {
            api: import("../../generated/prisma-client").APIApplication[];
            comments: import("../../generated/prisma-client").Comment[];
        }>;
    };
    Mutation: {
        createApi(_: any, args: any, { session, db }: Context): Promise<ApolloError | import("../../generated/prisma-client").APIApplication>;
        resetTokenAPI(_: any, __: any, { db, session }: Context): Promise<ApolloError | {
            api: import("../../generated/prisma-client").APIApplicationPromise;
        }>;
    };
};
