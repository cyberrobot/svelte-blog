import { config } from '$lib/config';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const res = await fetch(
		`${config.apiUrl}/tags?filters[name][$eq]=${params.tag}&populate[posts][fields][0]=title&populate[posts][fields][1]=slug`
	);
	const tag = await res.json();
	if (tag) {
		return {
			tag: tag.data[0]
		};
	}
	throw error(404, 'Not found');
}) satisfies PageServerLoad;
