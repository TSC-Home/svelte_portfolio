export const prerender = true;

import Image from './Og.svelte';
import { componentToPng } from '$lib/utils/rednderIsmge';
import { getProjects } from '$lib/site/handle_posts';

const projectPosts = await getProjects();

export const GET = async ({ params }) => {
	const width = 1200;
	const height = 600;
	const sanitizedSlug = params.ogprojectsslug.replace(/\.png$/, '');
	const post = projectPosts.find((snippet) => snippet.slug === sanitizedSlug);

	return componentToPng(
		Image,
		{ title: post?.title, description: post?.description },
		height,
		width
	);
};

export const entries = () => {
	const slugArray: any = projectPosts.map((snippet) => {
		return { ogslug: `${snippet.slug}.png`, slug: `${snippet.slug}.png` };
	});

	return slugArray;
};
