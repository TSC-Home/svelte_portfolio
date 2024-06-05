import { listPosts, listProjects } from '$lib/utils';
import { error } from '@sveltejs/kit';

export async function load() {
	try {
		const projects = listProjects();
		const publishedProjects = projects.filter(({ draft }) => !draft);
		const blogs = listPosts();
		const publishedPosts = blogs.filter(({ draft }) => !draft);
		return { projects: publishedProjects.slice(0, 2), blogs: publishedPosts.slice(0, 2) };
	} catch (e) {
		error(404, (e as Error).message);
	}
}
