"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const path = require("path");
const os_1 = require("os");
const scotts_utilities_1 = require("scotts_utilities");
const apollo_server_express_1 = require("apollo-server-express");
const graphql_import_1 = require("graphql-import");
const graphql_tools_1 = require("graphql-tools");
const prisma_client_1 = require("./generated/prisma-client");
const graphql_middleware_1 = require("graphql-middleware");
const redis_1 = require("./redis");
dotenv.config();
const genSchema_1 = require("./utils/genSchema");
const middleware_1 = require("./middleware");
const graphqlMiddleware_1 = require("./graphqlMiddleware");
const { PORT = 4545, MANAGEMENT_API_SECRET = 'randomsecret', PRISMA_URL = 'http://localhost:4466/prismadb/dev', NODE_ENV = 'development' } = process.env;
exports.PrismaDB = new prisma_client_1.Prisma({
    endpoint: PRISMA_URL,
    secret: MANAGEMENT_API_SECRET,
    debug: false
});
const typeDefs = graphql_import_1.importSchema(path.join(__dirname, './schema.graphql'));
const makeSchema = graphql_tools_1.makeExecutableSchema({
    typeDefs,
    resolvers: genSchema_1.genResolvers()
});
const app = express();
const { schema } = graphql_middleware_1.applyMiddleware(makeSchema, graphqlMiddleware_1.graphqlMiddleware);
middleware_1.middleware(app);
const apolloServer = new apollo_server_express_1.ApolloServer({
    introspection: true,
    playground: true,
    subscriptions: {
        path: '/graphql'
    },
    schema,
    context: ({ req, res }) => ({
        req,
        res,
        session: req !== undefined ? req.session : req,
        db: exports.PrismaDB,
        redis: redis_1.redis,
        client_origin: req.get('origin')
    })
});
apolloServer.applyMiddleware({
    app,
    cors: {
        credentials: true,
        origin: [
            'http://localhost:1234',
            'http://localhost:3000',
            'http://localhost:8080'
        ]
    }
});
const httpServer = http.createServer(app);
httpServer.listen(PORT);
apolloServer.installSubscriptionHandlers(httpServer);
httpServer.on('listening', () => __awaiter(this, void 0, void 0, function* () {
    const enviroment = NODE_ENV;
    if (enviroment === 'test') {
        redis_1.redis.flushall();
    }
    const messages = [
        `Running on http://localhost:${PORT}${apolloServer.graphqlPath}`,
        `Subscriptions on http://localhost:${PORT}${apolloServer.subscriptionsPath}`,
        `Current development status - ${enviroment}`,
        `Operating system - ${os_1.platform()} ${os_1.arch()}`
    ];
    yield scotts_utilities_1.consolePrint(messages);
}));
httpServer.on('error', (e) => console.error(e));
//# sourceMappingURL=index.js.map