export declare const graphqlMiddleware: {
    Query: {
        me: (resolve: any, parent: any, args: any, context: any, info: any) => Promise<any>;
    };
    Mutation: {
        login: (resolve: any, parent: any, args: any, context: any, info: any) => Promise<any>;
        register: (resolve: any, parent: any, args: any, context: any, info: any) => Promise<any>;
        changePassword: (resolve: any, parent: any, args: any, context: any, info: any) => Promise<any>;
    };
};
