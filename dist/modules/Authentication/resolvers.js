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
const constants_1 = require("../../constants");
const { JWT_TOKEN_SECRET = 'secret' } = process.env;
exports.resolvers = {
    Query: {
        me(_, __, { db, session }) {
            return db.user({ id: session.userId });
        }
    },
    Mutation: {
        checkToken(_, args, { db }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    let decoded;
                    if (args.token != null) {
                        decoded = scotts_utilities_1.verifyToken(args.token, JWT_TOKEN_SECRET);
                    }
                    if (decoded == null) {
                        throw new apollo_server_core_1.AuthenticationError(constants_1.INVALID_CREDENTIALS);
                    }
                    const user = yield db.user({
                        email: decoded.email
                    });
                    if (user) {
                        return {
                            ok: true,
                            result: `${user.username}`
                        };
                    }
                    else {
                        return {
                            ok: true,
                            result: constants_1.INVALID_CREDENTIALS
                        };
                    }
                }
                catch (error) {
                    scotts_utilities_1.logger('Forgot Password').error({ level: '5', message: error });
                    return new apollo_server_core_1.ApolloError(error);
                }
            });
        }
    }
};
//# sourceMappingURL=resolvers.js.map