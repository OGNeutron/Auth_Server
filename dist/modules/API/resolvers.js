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
const scotts_utilities_1 = require("scotts_utilities");
const apollo_server_core_1 = require("apollo-server-core");
const crypto_1 = require("crypto");
exports.resolvers = {
    Query: {
        fetchAPI(_, __, { db, session }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const api = yield db.aPIApplications({
                        where: {
                            admin: {
                                id: session.userId
                            }
                        }
                    });
                    console.log(api[0]);
                    const comments = yield db.comments({
                        where: {
                            API: {
                                id: api[0].id
                            }
                        }
                    });
                    return {
                        api,
                        comments
                    };
                }
                catch (error) {
                    scotts_utilities_1.logger('API Application').error({ level: '5', message: error });
                    return new apollo_server_core_1.ApolloError(error);
                }
            });
        }
    },
    Mutation: {
        createApi(_, args, { session, db }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const token = crypto_1.randomBytes(32).toString('hex');
                    console.log('TOKEN', token);
                    const user = yield db.users({ where: { id: session.userId } });
                    console.log('USER', user);
                    const api = yield db.createAPIApplication({
                        admin: {
                            connect: {
                                email: user[0].email
                            }
                        },
                        name: args.name,
                        token
                    });
                    console.log('API', api);
                    return api;
                }
                catch (error) {
                    scotts_utilities_1.logger('API Application').error({ level: '5', message: error });
                    return new apollo_server_core_1.ApolloError(error);
                }
            });
        },
        resetTokenAPI(_, __, { db, session }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const userAPI = yield db.aPIApplications({
                        where: { admin: { id: session.userId } }
                    });
                    const [token] = scotts_utilities_1.createToken({ id: session.userId }, 'secret', '');
                    const api = db.updateAPIApplication({
                        where: {
                            id: userAPI[0].id
                        },
                        data: {
                            token
                        }
                    });
                    return { api };
                }
                catch (error) {
                    scotts_utilities_1.logger('API Application').error({ level: '5', message: error });
                    return new apollo_server_core_1.ApolloError(error);
                }
            });
        }
    }
};
//# sourceMappingURL=resolvers.js.map