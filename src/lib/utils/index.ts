import type { DateStyle, Fetch } from '$lib/types';

export async function fetchJSON<Data>(url: string, fetchFn: Fetch = fetch): Promise<Data> {
	const response = await fetchFn(url);
	if (!response.ok) throw new Error(`Error fetching JSON from ${response.url}`);
	return await response.json();
}

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	// Safari is mad about dashes in the date
	const dateToFormat = new Date(date.replaceAll('-', '/'));
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return dateFormatter.format(dateToFormat);
}

export function formatNumber(number: number, locales = 'en') {
	return new Intl.NumberFormat(locales).format(number);
}

export function listPosts() {
	const modules = import.meta.glob('../../routes/blog/**/*.markdoc', {
		eager: true
	});

	const formattedModules = Object.entries(modules).map(([filepath, module]) => {
		//@ts-expect-error it does exist
		const { frontmatter } = module;

		const parts = filepath.split('/+page.markdoc')[0].split('/');
		const slug = parts[parts.length - 1];

		return {
			title: frontmatter.title,
			subtitle: frontmatter.subtitle,
			description: frontmatter.description,
			slug,
			tags: frontmatter.tags,
			published: frontmatter.published,
			icon: frontmatter.icon,
			draft: frontmatter.draft,
			externallink: frontmatter.externallink
		};
	});
	return formattedModules;
}

export function listProjects() {
	const modules = import.meta.glob('../../routes/projects/**/*.markdoc', {
		eager: true
	});

	const formattedModules = Object.entries(modules).map(([filepath, module]) => {
		//@ts-expect-error it does exist
		const { frontmatter } = module;

		const parts = filepath.split('/+page.markdoc')[0].split('/');
		const slug = parts[parts.length - 1];

		return {
			title: frontmatter.title,
			subtitle: frontmatter.subtitle,
			description: frontmatter.description,
			slug,
			tags: frontmatter.tags,
			published: frontmatter.published,
			icon: frontmatter.icon,
			draft: frontmatter.draft,
			externallink: frontmatter.externallink
		};
	});
	return formattedModules;
}
