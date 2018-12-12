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
const apollo_server_express_1 = require("apollo-server-express");
const YupSchemas_1 = require("../YupSchemas");
const utils_1 = require("../../../utils");
const constants_1 = require("../../../constants");
const { EMAIL_HOST = 'smtp.mailtrap.io', EMAIL_PORT = 2525, EMAIL_USER = '984c1182cd3546', EMAIL_PASS = 'c468fcdc66d05b', JWT_TOKEN_SECRET = 'secret' } = process.env;
const from = 'Experimental website <scottberry91@gmail.com>';
exports.resolvers = {
    Mutation: {
        authConfirmation(_, args, { db }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    let decoded;
                    if (args.token != null) {
                        decoded = scotts_utilities_1.verifyToken(args.token, JWT_TOKEN_SECRET);
                    }
                    console.log('DECODED', decoded);
                    if (decoded == null) {
                        throw new apollo_server_express_1.AuthenticationError(constants_1.INVALID_CREDENTIALS);
                    }
                    const user = yield db.updateUser({
                        where: { id: decoded.id },
                        data: {
                            confirmed: true
                        }
                    });
                    if (user) {
                        return {
                            ok: true,
                            result: `${user.email}`
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
                    scotts_utilities_1.logger('Auth Confirmation Error').error({
                        level: '0',
                        message: error.message
                    });
                    return new apollo_server_express_1.ApolloError(error);
                }
            });
        },
        register(_, args, { db }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    try {
                        yield YupSchemas_1.registerSchema.validate(args, { abortEarly: false });
                    }
                    catch (error) {
                        return new apollo_server_express_1.AuthenticationError(utils_1.formatYupErrors(error));
                    }
                    const hashedPassword = yield scotts_utilities_1.hashPassword(args.password, 10);
                    const user = yield db.createUser({
                        username: args.username,
                        email: args.email,
                        password: hashedPassword,
                        role: 'USER',
                        avatar_url: {
                            create: {
                                url: '',
                                filename: '',
                                mimetype: '',
                                encoding: '',
                                key: '',
                                ETag: ''
                            }
                        }
                    });
                    const link = yield scotts_utilities_1.generateEmailLink({ id: user.id, username: user.username, email: user.email }, 'http://localhost:1234/auth/confirmation');
                    console.log(link);
                    try {
                        const email = scotts_utilities_1.SendMail({
                            host: EMAIL_HOST,
                            port: EMAIL_PORT,
                            auth: {
                                user: EMAIL_USER,
                                pass: EMAIL_PASS
                            }
                        }, {
                            from,
                            to: user.email,
                            subject: 'Confirmation',
                            html: `
              To Confirm account click on the link below
  
              <a href="${link}">Reset Link</a>
              `
                        });
                        console.log('SENT MAIL', email);
                        if (email) {
                            return {
                                ok: true,
                                sentEmailMessage: `Send confirmation email to ${user.email}`,
                                email: user.email
                            };
                        }
                        else {
                            return {
                                ok: false
                            };
                        }
                    }
                    catch (error) {
                        console.log(error);
                        return new apollo_server_express_1.ApolloError(error);
                    }
                }
                catch (error) {
                    console.log(error);
                    return new apollo_server_express_1.ApolloError(error);
                }
            });
        }
    }
};
//# sourceMappingURL=resolvers.js.map