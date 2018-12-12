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
const constants_1 = require("../constants");
exports.formatYupErrors = (error) => error.errors.map((error) => error);
exports.removeAllUsersSessions = (userId, redis) => __awaiter(this, void 0, void 0, function* () {
    const sessionIds = yield redis.lrange(`${constants_1.USER_SESSION_ID_PREFIX}${userId}`, 0, -1);
    const promises = [];
    for (let i = 0; i < sessionIds.length; i++) {
        promises.push(redis.del(`${constants_1.REDIS_PREFIX}${sessionIds[i]}`));
    }
    yield Promise.all(promises);
});
//# sourceMappingURL=index.js.map