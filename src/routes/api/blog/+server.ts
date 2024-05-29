import { error, json } from '@sveltejs/kit';
import { getPosts } from '$lib/site/handle_posts';

export async function GET() {
	try {
		const posts = await getPosts();
		return json(posts);
	} catch (e) {
		error(404, 'Failed to load posts');
	}
}
