import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	try {
		const postRes = await fetch(`http://127.0.0.1:1337/api/posts/${params.post}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const postData = await postRes.json();
		const bioRes = await fetch(`http://127.0.0.1:1337/api/bio?populate[thumbnail][fields][0]=url`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const bioData = await bioRes.json();

		if (postData && bioData) {
			return {
				post: postData.data,
				bio: bioData.data
			};
		}
	} catch (error) {
		console.log('error', error);
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
