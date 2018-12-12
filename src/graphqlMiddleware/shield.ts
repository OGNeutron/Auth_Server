// import { shield, rule } from 'graphql-shield';
// import { IMiddlewareGenerator } from 'graphql-middleware';

// import { Context } from '../types';

// const isAuthenticated = rule()((_: any, __: any, ctx: Context) => {
// 	return !!ctx.session.userId;
// });

// export const permissions: IMiddlewareGenerator<any, any, any> = shield({
// 	Query: {
// 		me: isAuthenticated
// 	}
// });
