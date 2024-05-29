import { error } from '@sveltejs/kit';
import { getPost } from '$lib/site/handle_posts';

export async function load({ params }) {
	try {
		return {
			blogpost: await getPost(params.blogpostslug)
		};
	} catch (e) {
		error(404, `Post does not exist 1`);
	}
}
