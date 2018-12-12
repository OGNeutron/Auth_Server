import { AuthenticationError, ApolloError } from 'apollo-server-express';
import { Context } from '../../../types';
export declare const resolvers: {
    Mutation: {
        logout(_: any, __: any, { session, redis }: Context): Promise<true | ApolloError>;
        login(_: any, args: any, { db, session }: Context): Promise<AuthenticationError | {
            ok: boolean;
            user: import("../../../generated/prisma-client").User;
            token: string;
            refreshToken: string;
        } | {
            ok: boolean;
            user: import("../../../generated/prisma-client").User;
            token?: undefined;
            refreshToken?: undefined;
        }>;
    };
};
