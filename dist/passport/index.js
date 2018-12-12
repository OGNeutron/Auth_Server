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
const passport = require("passport");
const passport_facebook_1 = require("passport-facebook");
const __1 = require("..");
const facebook = () => {
    return passport.use(new passport_facebook_1.Strategy({
        clientID: '',
        clientSecret: '',
        callbackURL: ''
    }, (accessToken, refreshToken, profile, done) => __awaiter(this, void 0, void 0, function* () {
        let user = yield __1.PrismaDB.user({ email: profile.email });
        if (!user) {
            user = yield __1.PrismaDB.createUser({
                role: 'USER',
                username: profile.username,
                password: '',
                email: profile.email,
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
        }
        done(null, {
            user,
            accessToken,
            refreshToken
        });
    })));
};
//# sourceMappingURL=index.js.map