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
const apollo_server_express_1 = require("apollo-server-express");
const scotts_utilities_1 = require("scotts_utilities");
const constants_1 = require("../../../constants");
const utils_1 = require("../../../utils");
const { JWT_TOKEN_SECRET = 'secret' } = process.env;
exports.resolvers = {
    Mutation: {
        logout(_, __, { session, redis }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    let userId;
                    if (session) {
                        if (session.jwtDecodedUser) {
                            userId = session.jwtDecodedUser;
                        }
                        else {
                            userId = session.userId;
                        }
                        if (userId === undefined) {
                            throw new apollo_server_express_1.AuthenticationError(constants_1.INVALID_CREDENTIALS);
                        }
                        utils_1.removeAllUsersSessions(userId, redis);
                        session.destroy((error) => {
                            if (error) {
                                scotts_utilities_1.logger('Logging out').error({
                                    level: '5',
                                    message: error
                                });
                            }
                        });
                        return true;
                    }
                    return new apollo_server_express_1.AuthenticationError(constants_1.INVALID_CREDENTIALS);
                }
                catch (error) {
                    scotts_utilities_1.logger('Logging out').error({ level: '5', message: error });
                    return new apollo_server_express_1.ApolloError(error);
                }
            });
        },
        login(_, args, { db, session }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const searchUser = yield db.users({
                        where: {
                            AND: {
                                email: args.email
                            }
                        }
                    });
                    const user = searchUser[0];
                    if (user.confirmed) {
                        const valid = yield scotts_utilities_1.comparePassword(args.password, user.password);
                        if (valid) {
                            session.userId = user.id;
                            if (args.tokens) {
                                const [token, refreshToken] = scotts_utilities_1.createToken({ id: user.id }, JWT_TOKEN_SECRET, '7d', JWT_TOKEN_SECRET, { id: user.id });
                                console.log('TOKENS', token, refreshToken);
                                if (token && refreshToken) {
                                    return {
                                        ok: true,
                                        user,
                                        token,
                                        refreshToken
                                    };
                                }
                            }
                            return {
                                ok: true,
                                user
                            };
                        }
                        else {
                            throw new Error(constants_1.INVALID_CREDENTIALS);
                        }
                    }
                    else {
                        throw new Error(constants_1.ACCOUNT_NOT_CONFIRMED);
                    }
                }
                catch (error) {
                    scotts_utilities_1.logger('Login Error').error({ level: '5', message: error });
                    return new apollo_server_express_1.AuthenticationError(error);
                }
            });
        }
    }
};
//# sourceMappingURL=resolvers.js.map