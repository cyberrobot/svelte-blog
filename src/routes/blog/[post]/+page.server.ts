import { config } from '$lib/config';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { compile } from 'mdsvex';

export const load = (async ({ fetch, params }) => {
	const postRes = await fetch(
		`${config.apiUrl}/posts/?filters[slug][$eq]=${params.post}&populate[thumbnail][fields][0]=name&populate[thumbnail][fields][1]=alternativeText&populate[thumbnail][fields][2]=hash&populate[thumbnail][fields][3]=ext`
	);
	const bioRes = await fetch(
		`${config.apiUrl}/bio?populate[thumbnail][fields][0]=name&populate[thumbnail][fields][1]=alternativeText&populate[thumbnail][fields][2]=hash&populate[thumbnail][fields][3]=ext`
	);

	const postData = await postRes.json();
	const bioData = await bioRes.json();
	if (postData && bioData) {
		const compiledPostContent = (await compile(postData.data[0].attributes.content))?.code;
		const compiledBioContent = (await compile(bioData.data.attributes.content))?.code;
		console.log('compiledPostContent', compiledPostContent);
		console.log('compiledBioContent', compiledBioContent);
		return {
			post: {
				...postData.data[0],
				attributes: {
					...postData.data[0].attributes,
					content: compiledPostContent
				}
			},
			bio: {
				...bioData.data,
				attributes: {
					...bioData.data.attributes,
					content: compiledBioContent
				}
			}
		};
	}
	throw error(404, 'Not found');
}) satisfies PageServerLoad;
