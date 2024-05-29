import { error, json } from '@sveltejs/kit';
import { getProjects } from '$lib/site/handle_posts';

export async function GET() {
	try {
		const projects = await getProjects();
		return json(projects);
	} catch (e) {
		error(404, 'Failed to load posts');
	}
}
