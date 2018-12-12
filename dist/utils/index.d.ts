import { Redis } from 'ioredis';
export declare const formatYupErrors: (error: any) => any;
export declare const removeAllUsersSessions: (userId: string, redis: Redis) => Promise<any>;
