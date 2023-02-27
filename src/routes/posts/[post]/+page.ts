import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	try {
		const res = await fetch(`http://127.0.0.1:1337/api/posts/${params.post}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();
		console.log('response data', data);

		if (data) {
			return {
				post: data.data
			};
		}
	} catch (error) {
		console.log('error', error);
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
