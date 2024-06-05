import * as config from '$lib/site/config';

import { listPosts, listProjects } from '$lib/utils/index';

export const prerender = true;

export async function GET() {
	const posts = listPosts();
	const projects = listProjects();

	const headers = { 'Content-Type': 'application/xml' };

	const pages = ['blog', 'projects'];
	const blog = [...posts.map((post) => post.slug)];
	const project = [...projects.map((project) => project.slug)];

	const sitemap = `
	  <?xml version="1.0" encoding="UTF-8" ?>
	  <urlset
	  	xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
	    xmlns:xhtml="https://www.w3.org/1999/xhtml"
	    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
	    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
	    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
	    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
	  >
	    ${pages.map((page) => `<url><loc>${config.siteUrl}${page}</loc></url>`).join('')}
			${blog.map((slug) => `<url><loc>${config.siteUrl}blog/${slug}</loc></url>`).join('')}
			${project.map((slug) => `<url><loc>${config.siteUrl}projects/${slug}</loc></url>`).join('')}
	  </urlset>
	`.trim();

	return new Response(sitemap, { headers });
}
