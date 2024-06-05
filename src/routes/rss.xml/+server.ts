import * as config from '$lib/site/config';
import { listPosts } from '$lib/utils';

export const prerender = true;

export async function GET() {
	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${config.siteName}</title>
				<description>${config.siteDescription}</description>
				<link>${config.siteUrl}</link>
				<atom:link href="${config.siteUrl}rss.xml" rel="self" type="application/rss+xml"/>
				${(await listPosts())
					.reverse()
					.map(
						(post) =>
							`${
								post.draft
									? ''
									: `
					<item>
						<title>${post.title}</title>
						<link>${config.siteUrl}blog/${post.slug}</link>
						<pubDate>${new Date(post.published).toUTCString()}</pubDate>
						<guid>${config.siteUrl}blog/${post.slug}</guid>
						<description>${post.description}</description>
					</item>
				`
							}`
					)
					.join('')}
			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
}
