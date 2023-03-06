import { config } from '$lib/config';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const postRes = await fetch(`${config.apiUrl}/posts/${params.post}`);
	const postData = await postRes.json();
	const bioRes = await fetch(`${config.apiUrl}/bio?populate[thumbnail][fields][0]=url`);
	const bioData = await bioRes.json();

	if (postData && bioData) {
		return {
			post: postData.data,
			bio: bioData.data
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
