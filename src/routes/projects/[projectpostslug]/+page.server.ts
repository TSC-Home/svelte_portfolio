import { error } from '@sveltejs/kit';
import { getProject } from '$lib/site/handle_posts';

export async function load({ params }) {
	try {
		return {
			projectpost: await getProject(params.projectpostslug)
		};
	} catch (e) {
		error(404, `Post does not exist`);
	}
}
