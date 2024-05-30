import matter from 'gray-matter';
import { markdownToHtml } from './markdown';
import type { Post } from '$lib/types';

// Import Markdown files eagerly
const blogPostModules = import.meta.glob('../../../posts/blog_posts/**/*.md', {
	eager: true,
	as: 'raw'
});

const projectPostModules = import.meta.glob('../../../posts/project_posts/**/*.md', {
	eager: true,
	as: 'raw'
});

async function parseMarkdownFiles(postType: string) {
	try {
		const posts: Post[] = [];
		let modules;

		if (postType === 'blog_posts') {
			modules = blogPostModules;
		} else if (postType === 'project_posts') {
			modules = projectPostModules;
		} else {
			throw new Error('Invalid post type');
		}

		const modulePaths = Object.keys(modules);
		for (const path of modulePaths) {
			const content = modules[path] as string;
			const { data } = matter(content);
			posts.push(data as Post);
		}

		return posts;
	} catch (e) {
		throw new Error('Could not parse Markdown files');
	}
}

async function parseMarkdownFile(slug: string, postType: string) {
	try {
		let modules;
		let modulePath;

		if (postType === 'blog_posts') {
			modules = blogPostModules;
			modulePath = `../../../posts/blog_posts/${slug}/${slug}.md`;
		} else if (postType === 'project_posts') {
			modules = projectPostModules;
			modulePath = `../../../posts/project_posts/${slug}/${slug}.md`;
		} else {
			throw new Error('Invalid post type');
		}

		const content = modules[modulePath] as string;
		if (!content) {
			throw new Error(`Could not find ${slug}.md`);
		}

		return markdownToHtml(content);
	} catch (e) {
		throw new Error(`Could not parse ${slug}.md`);
	}
}

function getTime(date: string) {
	return new Date(date).getTime();
}

export async function getPosts() {
	let posts = await parseMarkdownFiles('blog_posts');
	posts = posts.sort((first, second) => {
		return getTime(second.published) - getTime(first.published);
	});
	return posts;
}

export async function getProjects() {
	let projects = await parseMarkdownFiles('project_posts');
	projects = projects.sort((first, second) => {
		return getTime(second.published) - getTime(first.published);
	});
	return projects;
}

export async function getPostsByCategory(category: string) {
	const posts = await getPosts();
	return posts.filter((post) => !post.draft && post.category === category);
}

export async function getPost(slug: string) {
	return parseMarkdownFile(slug, 'blog_posts');
}

export async function getProject(slug: string) {
	return parseMarkdownFile(slug, 'project_posts');
}
