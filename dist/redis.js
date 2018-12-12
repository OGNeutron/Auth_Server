"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Redis = require("ioredis");
const REDIS = process.env.NODE_ENV === 'production' ? `${process.env.REDIS_URL}` : '';
exports.redis = new Redis(REDIS);
//# sourceMappingURL=redis.js.map