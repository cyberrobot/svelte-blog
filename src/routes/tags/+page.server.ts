import { config } from '$lib/config';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch(`${config.apiUrl}/tags?populate[posts][fields][0]=id`);
	const tags = await res.json();
	return {
		tags: tags.data
	};
}) satisfies PageServerLoad;
