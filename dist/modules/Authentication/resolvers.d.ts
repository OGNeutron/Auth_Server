import { Context } from '../../types';
import { ApolloError } from 'apollo-server-core';
export declare const resolvers: {
    Query: {
        me(_: any, __: any, { db, session }: Context): import("../../generated/prisma-client").UserPromise;
    };
    Mutation: {
        checkToken(_: any, args: any, { db }: Context): Promise<ApolloError | {
            ok: boolean;
            result: string;
        }>;
    };
};
