import { Request, Response } from 'express';
import { Prisma } from '../generated/prisma-client';
import { Redis } from 'ioredis';

export interface Context {
	req: Request;
	res: Response;
	db: Prisma;
	session: Express.Session;
	client_origin: string;
	redis: Redis;
}
