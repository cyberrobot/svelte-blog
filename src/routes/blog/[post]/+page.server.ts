import { config } from '$lib/config';
import type { PageServerLoad } from './$types';
import { compile } from 'mdsvex';

export const load = (async ({ fetch, params }) => {
	const postRes = await fetch(
	`${config.apiUrl}/posts/?filters[slug][$eq]=${params.post}&?populate[thumbnail][fields][0]=url&populate[thumbnail][fields]`
	);
	const bioRes = await fetch(`${config.apiUrl}/bio?populate[thumbnail][fields][0]=url`);
	try {
		const postData = await postRes.json();
		const bioData = await bioRes.json();
		const compiledPostContent = (await compile(postData.data[0].attributes.content))?.code;
		const compiledBioContent = (await compile(bioData.data.attributes.content))?.code;
		if (postData && bioData && compiledPostContent && compiledBioContent) {
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
	} catch (error) {
		return {
      status: 404,
      error,
    }
	}
}) satisfies PageServerLoad;
