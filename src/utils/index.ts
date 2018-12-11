import { Redis } from 'ioredis';
import { REDIS_PREFIX, USER_SESSION_ID_PREFIX } from '../constants';

export const formatYupErrors = (error: any) => error.errors.map((error: any) => error);

export const removeAllUsersSessions = async (
	userId: string,
	redis: Redis
): Promise<any> => {
	const sessionIds = await redis.lrange(`${USER_SESSION_ID_PREFIX}${userId}`, 0, -1);

	const promises: Array<Promise<any>> = [];

	for (let i = 0; i < sessionIds.length; i++) {
		promises.push(redis.del(`${REDIS_PREFIX}${sessionIds[i]}`));
	}

	await Promise.all(promises);
};
