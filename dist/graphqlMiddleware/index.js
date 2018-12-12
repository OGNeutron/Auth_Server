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
const apollo_server_core_1 = require("apollo-server-core");
const constants_1 = require("../constants");
const isAuthenticated = (resolve, parent, args, context, info) => __awaiter(this, void 0, void 0, function* () {
    console.log(context);
    if (!context.session.userId) {
        throw new apollo_server_core_1.AuthenticationError(constants_1.INVALID_CREDENTIALS);
    }
    return resolve(parent, args, context, info);
});
const alreadySignedIn = (resolve, parent, args, context, info) => __awaiter(this, void 0, void 0, function* () {
    console.log(context.session.userId);
    if (context.session.userId) {
        throw new apollo_server_core_1.AuthenticationError(constants_1.ALREADY_SIGNED_IN);
    }
    return resolve(parent, args, context, info);
});
exports.graphqlMiddleware = {
    Query: {
        me: isAuthenticated
    },
    Mutation: {
        login: alreadySignedIn,
        register: alreadySignedIn,
        changePassword: isAuthenticated
    }
};
//# sourceMappingURL=index.js.map