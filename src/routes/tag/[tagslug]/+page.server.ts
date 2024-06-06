import { listPosts, listProjects } from '$lib/utils/index';

export const load = async ({ params: { tagslug } }) => {
	const projects = listProjects();
	const blogs = listPosts();

	const filteredProjects = projects.filter(
		(blog) => blog.draft === false && blog.tags.includes(tagslug)
	);
	const filteredBlogs = blogs.filter((blog) => blog.draft === false && blog.tags.includes(tagslug));
	return {
		projects: filteredProjects,
		blogs: filteredBlogs,
		slug: tagslug
	};
};
