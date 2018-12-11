import * as passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { PrismaDB } from '..';

const facebook = () => {
	return passport.use(
		new FacebookStrategy(
			{
				clientID: '',
				clientSecret: '',
				callbackURL: ''
			},
			async (
				accessToken: any,
				refreshToken: any,
				profile: any,
				done: any
			) => {
				let user = await PrismaDB.user({ email: profile.email });

				if (!user) {
					user = await PrismaDB.createUser({
						role: 'USER',
						username: profile.username,
						// facebookId: profile.id,
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
			}
		)
	);
};
