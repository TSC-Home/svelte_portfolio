import { fetchJSON } from '$lib/utils';
import { error } from '@sveltejs/kit';
import type { Post } from '$lib/types';

export async function load({ fetch }) {
	try {
		const projects = await fetchJSON<Post[]>('/api/projects', fetch);
		const publishedProjects = projects.filter(({ draft }) => !draft);
		const blogs = await fetchJSON<Post[]>('/api/blog', fetch);
		const publishedPosts = blogs.filter(({ draft }) => !draft);
		return { projects: publishedProjects.slice(0, 2), blogs: publishedPosts.slice(0, 2) };
	} catch (e) {
		error(404, (e as Error).message);
	}
}
