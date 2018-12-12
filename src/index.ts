import * as express from 'express';
import * as http from 'http';
import * as dotenv from 'dotenv';
import * as path from 'path';

import { platform, arch } from 'os';
import { consolePrint } from 'scotts_utilities';
import { ApolloServer } from 'apollo-server-express';
import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'graphql-tools';
import { Prisma } from './generated/prisma-client';
import { applyMiddleware } from 'graphql-middleware';
import { redis } from './redis';
dotenv.config();

import { Context } from './types';
import { genResolvers } from './utils/genSchema';
import { middleware } from './middleware';
// import { permissions } from './graphqlMiddleware/shield';
import { graphqlMiddleware } from './graphqlMiddleware';

const {
	PORT = 4545,
	MANAGEMENT_API_SECRET = 'randomsecret',
	PRISMA_URL = 'http://localhost:4466/prismadb/dev',
	NODE_ENV = 'development'
} = process.env;

export const PrismaDB = new Prisma({
	endpoint: PRISMA_URL,
	secret: MANAGEMENT_API_SECRET,
	debug: false
});

const typeDefs: string = importSchema(path.join(__dirname, './schema.graphql'));

const makeSchema = makeExecutableSchema({
	typeDefs,
	resolvers: genResolvers()
});

const app = express();

const { schema } = applyMiddleware(makeSchema, graphqlMiddleware);

middleware(app);

const apolloServer = new ApolloServer({
	introspection: true,
	playground: true,
	subscriptions: {
		path: '/graphql'
	},
	schema,
	context: ({ req, res }: Context) => ({
		req,
		res,
		session: req !== undefined ? req.session : req,
		db: PrismaDB,
		redis,
		client_origin: req.get('origin') as string
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

httpServer.on('listening', async () => {
	const enviroment = NODE_ENV as string;

	if (enviroment === 'test') {
		redis.flushall();
	}

	const messages: string[] = [
		`Running on http://localhost:${PORT}${apolloServer.graphqlPath}`,
		`Subscriptions on http://localhost:${PORT}${apolloServer.subscriptionsPath}`,
		`Current development status - ${enviroment}`,
		`Operating system - ${platform()} ${arch()}`
	];

	await consolePrint(messages);
});

httpServer.on('error', (e) => console.error(e));

// StartServer({
//   app: {
//     middleware: middleware
//   },
//   apollo: {
//     introspection: true,
//     playground: true,
//     subscriptions: {
//       path: "/graphql"
//     },
//     schema,
//     context: ({ req, res }: Context) => ({
//       req,
//       res,
//       session: req !== undefined ? req.session : req,
//       db,
//       redis
//     })
//   },
//   options: {
//     port: "",
//     cors: {
//       credentials: true,
//       origin: ["http://localhost:1234", "http://localhost:3000"]
//     }
//   }
// })
