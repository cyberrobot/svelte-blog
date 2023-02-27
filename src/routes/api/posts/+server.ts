import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
export const GET = (async ({ params }) => {
	try {
		const res = await fetch(`https://127.0.0.1:1337/api/posts/${params.post}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();
		console.log('data', data);

		if (data) {
			return new Response(String(data));
		}
	} catch (error) {
		console.log('error', error);
	}
	throw error(404, 'Not found');
}) satisfies RequestHandler;
