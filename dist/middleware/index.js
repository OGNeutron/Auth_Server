"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const redis_1 = require("../redis");
const constants_1 = require("../constants");
const redisStore = require('connect-redis')(session);
const { NODE_ENV = 'development', SESSION_SECRET = 'secret' } = process.env;
const IN_PROD = NODE_ENV === 'production';
const EXPIRE_TIME = 60 * 60 * 24 * 7;
exports.middleware = (app) => {
    if (!IN_PROD) {
        app.use(morgan('dev'));
    }
    app.use(compression());
    app.use(helmet());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(session({
        store: new redisStore({
            client: redis_1.redis,
            prefix: constants_1.REDIS_PREFIX
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
    }));
    app.use(passport.initialize());
};
//# sourceMappingURL=index.js.map