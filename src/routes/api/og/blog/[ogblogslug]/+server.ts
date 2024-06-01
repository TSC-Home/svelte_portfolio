import Image from './Og.svelte';
import { componentToPng } from '$lib/utils/rednderIsmge';
import { getProjects as getPosts } from '$lib/site/handle_posts';

const blogPosts = await getPosts();

export const GET = async ({ params }) => {
	const width = 1200;
	const height = 600;
	const sanitizedSlug = params.ogblogslug.replace(/\.png$/, '');
	const post = blogPosts.find((snippet) => snippet.slug === sanitizedSlug);

	return componentToPng(
		Image,
		{ title: post?.title, description: post?.description },
		height,
		width
	);
};

export const entries = () => {
	const slugArray: any = blogPosts.map((snippet) => {
		return { ogslug: `${snippet.slug}.png`, slug: `${snippet.slug}.png` };
	});

	return slugArray;
};
