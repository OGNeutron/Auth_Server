"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = process.env.PORT || 2000;
exports.REDIS_PREFIX = 'sess:';
exports.USER_SESSION_ID_PREFIX = 'userSids:';
exports.FORGOT_PASSWORD_PREFIX = 'forgotPassword:';
exports.INVALID_CREDENTIALS = 'Invalid credentials';
exports.INCORECT_CREDENTIALS = 'Incorrect credentials';
exports.EXPIRED_KEY_ERROR = 'Session key has expired, please redo';
exports.PASSWORD_SUCCESSFULLY_CHANGED = 'Password successfully changed';
exports.ACCOUNT_NOT_CONFIRMED = 'Account has not activated please check your email';
exports.ALREADY_SIGNED_IN = 'User is already signed in';
exports.API_TOKEN_ERROR = 'API Token is needed';
//# sourceMappingURL=constants.js.map