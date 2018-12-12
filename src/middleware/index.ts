import { Express } from 'express';
import * as express from 'express';
import * as path from 'path';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as session from 'express-session';
import * as passport from 'passport';
import { redis } from '../redis';
import { REDIS_PREFIX } from '../constants';

const redisStore = require('connect-redis')(session);

const { NODE_ENV = 'development', SESSION_SECRET = 'secret' } = process.env;

const IN_PROD = NODE_ENV === 'production';
const EXPIRE_TIME: number = 60 * 60 * 24 * 7;

export const middleware = (app: Express) => {
	if (!IN_PROD) {
		app.use(morgan('dev'));
	}

	app.use(compression());
	app.use(helmet());
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(
		session({
			store: new redisStore({
				client: redis,
				prefix: REDIS_PREFIX
			}),
			name: 'A_SERVER_SID',
			secret: SESSION_SECRET,
			saveUninitialized: false,
			resave: false,
			cookie: {
				secure: IN_PROD ? true : false,
				sameSite: true,
				expires: true,
				maxAge: EXPIRE_TIME,
				signed: true,
				httpOnly: true
			}
		})
	);

	app.use(passport.initialize());
};
