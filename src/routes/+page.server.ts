import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { config } from '$lib/config';

export const load = (async ({ fetch }) => {
	const postsRes = await fetch(
		`${config.apiUrl}/posts?populate[thumbnail][fields][0]=url&populate[thumbnail][fields][1]=alternativeText`
	);

	const postsData = await postsRes.json();

	if (postsData) {
		return {
			posts: postsData.data
		};
	}
	throw error(404, 'Not found');
}) satisfies PageServerLoad;
