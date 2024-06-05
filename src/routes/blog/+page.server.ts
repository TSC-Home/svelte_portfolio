import { listPosts } from '$lib/utils/index';

export const load = async () => {
	const blogposts = listPosts();

	const publicBlogPosts = blogposts.filter((blog) => blog.draft === false);
	return {
		blogposts: publicBlogPosts
	};
};
