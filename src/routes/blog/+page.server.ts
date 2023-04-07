import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { config } from '$lib/config';

export const load = (async ({ fetch }) => {
	const postsRes = await fetch(
		`${config.apiUrl}/posts?populate[thumbnail][fields][0]=name
			&populate[thumbnail][fields][1]=alternativeText
			&populate[thumbnail][fields][2]=hash&populate[thumbnail][fields][3]=ext
			&sort=publishedAt:desc`
	);

	const postsData = await postsRes.json();

	if (postsData) {
		return {
			posts: postsData.data
		};
	}
	throw error(404, 'Not found');
}) satisfies PageServerLoad;
