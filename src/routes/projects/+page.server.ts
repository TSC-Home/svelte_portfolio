import { listProjects } from '$lib/utils/index';

export const load = async () => {
	const projects = listProjects();

	const publicProjects = projects.filter((blog) => blog.draft === false);
	return {
		projects: publicProjects
	};
};
