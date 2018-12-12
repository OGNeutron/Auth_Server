import { ApolloError } from 'apollo-server-express';
import { Context } from '../../../types';
export declare const resolvers: {
    Mutation: {
        changePassword(_: any, args: any, { db }: Context): Promise<ApolloError | {
            ok: boolean;
            message: string;
        }>;
        forgotPassword(_: any, args: any, { db, client_origin, redis }: Context): Promise<ApolloError | {
            ok: boolean;
            sentEmailMessage: string;
            email: string;
        }>;
        resetPassword(_: any, args: any, { db, redis }: Context): Promise<ApolloError | {
            ok: boolean;
            message: string;
            result?: undefined;
        } | {
            ok: boolean;
            result: any;
            message?: undefined;
        }>;
    };
};
