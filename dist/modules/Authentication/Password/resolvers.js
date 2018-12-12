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
const YupSchemas_1 = require("../YupSchemas");
const { EMAIL_HOST = 'smtp.mailtrap.io', EMAIL_PORT = 2525, EMAIL_USER = '984c1182cd3546', EMAIL_PASS = 'c468fcdc66d05b' } = process.env;
const from = 'Experimental website <scottberry91@gmail.com>';
exports.resolvers = {
    Mutation: {
        changePassword(_, args, { db }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const user = yield db.user(args.email);
                    if (!user) {
                        return {
                            ok: false,
                            message: constants_1.INVALID_CREDENTIALS
                        };
                    }
                    if (scotts_utilities_1.comparePassword(args.oldPassword, user.password)) {
                        return {
                            ok: false,
                            message: constants_1.INVALID_CREDENTIALS
                        };
                    }
                    const hashedPassword = yield scotts_utilities_1.hashPassword(args.newPassword, 10);
                    yield db.updateUser({
                        where: { id: user.id },
                        data: { password: hashedPassword }
                    });
                    return {
                        ok: true,
                        message: constants_1.PASSWORD_SUCCESSFULLY_CHANGED
                    };
                }
                catch (error) {
                    console.log(error);
                    return new apollo_server_express_1.ApolloError(error);
                }
            });
        },
        forgotPassword(_, args, { db, client_origin, redis }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const user = yield db.user(args.email);
                    if (!user) {
                        return new apollo_server_express_1.AuthenticationError(constants_1.INVALID_CREDENTIALS);
                    }
                    yield redis.set(`${constants_1.FORGOT_PASSWORD_PREFIX}${user.id}`, user.id, 'ex', 60 * 20);
                    const link = scotts_utilities_1.generateEmailLink({ id: user.id, username: user.username, email: user.email }, `${client_origin}/auth/reset_password`);
                    const sentMail = scotts_utilities_1.SendMail({
                        host: EMAIL_HOST,
                        port: EMAIL_PORT,
                        auth: {
                            user: EMAIL_USER,
                            pass: EMAIL_PASS
                        }
                    }, {
                        from,
                        to: user.email,
                        subject: 'Forgot Password',
                        html: `
            To reset password follow this link
        
            <a href="${link}">Reset Link</a>
            `
                    });
                    console.log('SENT MAIL', sentMail);
                    if (sentMail) {
                        return {
                            ok: true,
                            sentEmailMessage: `Send reset email to ${user.email}`,
                            email: user.email
                        };
                    }
                    else {
                        throw new Error('Error with email');
                    }
                }
                catch (error) {
                    scotts_utilities_1.logger('Forgot Password').error({ level: '5', message: error });
                    return new apollo_server_express_1.ApolloError(error);
                }
            });
        },
        resetPassword(_, args, { db, redis }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const redisKey = `${constants_1.FORGOT_PASSWORD_PREFIX}${args.id}`;
                    const userId = yield redis.get(redisKey);
                    if (!userId) {
                        return {
                            ok: false,
                            message: constants_1.EXPIRED_KEY_ERROR
                        };
                    }
                    try {
                        yield YupSchemas_1.forgotPasswordSchema.validate({ password: args.password }, { abortEarly: false });
                    }
                    catch (error) {
                        return {
                            ok: false,
                            result: error
                        };
                    }
                    const passwordHash = yield scotts_utilities_1.hashPassword(args.password, 10);
                    const updatedUser = db.updateUser({
                        where: {
                            id: userId
                        },
                        data: {
                            password: passwordHash
                        }
                    });
                    const deleteKey = redis.del(redisKey);
                    yield Promise.all([updatedUser, deleteKey]);
                    return {
                        ok: true,
                        message: constants_1.PASSWORD_SUCCESSFULLY_CHANGED
                    };
                }
                catch (error) {
                    scotts_utilities_1.logger('Forgot Password').error({ level: '5', message: error });
                    return new apollo_server_express_1.ApolloError(error);
                }
            });
        }
    }
};
//# sourceMappingURL=resolvers.js.map