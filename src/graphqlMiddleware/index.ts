import { AuthenticationError } from 'apollo-server-core';
import { INVALID_CREDENTIALS, ALREADY_SIGNED_IN } from '../constants';

const isAuthenticated = async (
	resolve: any,
	parent: any,
	args: any,
	context: any,
	info: any
) => {
	console.log(context);
	if (!context.session.userId) {
		// user is not logged in
		throw new AuthenticationError(INVALID_CREDENTIALS);
	}

	return resolve(parent, args, context, info);
};

const alreadySignedIn = async (
	resolve: any,
	parent: any,
	args: any,
	context: any,
	info: any
) => {
	console.log(context.session.userId);
	if (context.session.userId) {
		throw new AuthenticationError(ALREADY_SIGNED_IN);
	}

	return resolve(parent, args, context, info);
};

export const graphqlMiddleware = {
	Query: {
		me: isAuthenticated
	},
	Mutation: {
		login: alreadySignedIn,
		register: alreadySignedIn,
		changePassword: isAuthenticated
	}
};
