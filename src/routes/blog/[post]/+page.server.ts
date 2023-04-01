import { config } from '$lib/config';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ fetch, params }) => {
	const postRes = await fetch(
		`${config.apiUrl}/posts/?filters[slug][$eq]=${params.post}
			&populate[thumbnail][fields][0]=name
			&populate[thumbnail][fields][1]=alternativeText
			&populate[thumbnail][fields][2]=hash
			&populate[thumbnail][fields][3]=ext
			&populate=tags`
	);
	const bioRes = await fetch(
		`${config.apiUrl}/bio?populate[thumbnail][fields][0]=name&populate[thumbnail][fields][1]=alternativeText&populate[thumbnail][fields][2]=hash&populate[thumbnail][fields][3]=ext`
	);

	const postData = await postRes.json();
	const bioData = await bioRes.json();
	if (postData && bioData) {
		return {
			post: postData.data[0],
			bio: bioData.data
		};
	}
	throw error(404, 'Not found');
}) satisfies PageServerLoad;
