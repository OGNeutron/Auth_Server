import * as Redis from 'ioredis';

const REDIS = process.env.NODE_ENV === 'production' ? `${process.env.REDIS_URL}` : '';

export const redis = new Redis(REDIS);
