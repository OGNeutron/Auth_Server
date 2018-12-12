import { ApolloError } from 'apollo-server-express';
import { Context } from '../../../types';
export declare const resolvers: {
    Mutation: {
        authConfirmation(_: any, args: any, { db }: Context): Promise<ApolloError | {
            ok: boolean;
            result: string;
        }>;
        register(_: any, args: any, { db }: Context): Promise<ApolloError | {
            ok: boolean;
            sentEmailMessage: string;
            email: string;
        } | {
            ok: boolean;
            sentEmailMessage?: undefined;
            email?: undefined;
        }>;
    };
};
