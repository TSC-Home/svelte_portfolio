import { fetchJSON } from '$lib/utils';
import { error } from '@sveltejs/kit';
import type { Post } from '$lib/types';

export async function load({ fetch }) {
	try {
		const blogPosts = await fetchJSON<Post[]>('/api/blog', fetch);
		const filteredBlogPosts = blogPosts.filter(({ draft }) => !draft);
		return { posts: filteredBlogPosts.slice(0, 10) };
	} catch (e) {
		error(404, (e as Error).message);
	}
}
