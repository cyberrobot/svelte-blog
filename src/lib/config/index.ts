import { env } from '$env/dynamic/public';
const clientHost =
	env.PUBLIC_CLIENT_ENV === 'production'
		? 'https://batdog-codes-blog.fly.dev'
		: 'http://localhost:5173';
const apiHost =
	env.PUBLIC_CLIENT_ENV === 'production'
		? 'https://batdog-codes-cms.fly.dev'
		: 'http://127.0.0.1:1337';
export const config = {
	clientHost,
	apiUrl: apiHost + '/api',
	apiHost,
	staticAssetUrl:
		env.PUBLIC_CLIENT_ENV === 'production'
			? 'https://res.cloudinary.com/dxsogfhc1/image/upload/'
			: `${apiHost}/uploads/`
};
