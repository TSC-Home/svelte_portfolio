import type * as config from '$lib/site/config';

// Exporting type 'Post'
export type Post = {
	title: string;
	subtitle: string;
	description: string;
	slug: string;
	published: string;
	category: string;
	working_status: string;
	external_link: string;
	external_link_text: string;
	icon: string;
	draft: boolean;
};

// Exporting type 'Frontmatter'
export type Frontmatter = {
	title: string;
	subtitle: string;
	description: string;
	slug: string;
	published: string;
	category: string;
	working_status: string;
	external_link: string;
	external_link_text: string;
	icon: string;
};

// Exporting type 'Fetch'
export type Fetch = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

// Exporting type 'DateStyle'
export type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

// Exporting type 'Categories'
export type Categories = keyof typeof config.categories;

// Exporting type 'WorkingStatus'
export type WorkingStatus = keyof typeof config.working_status;
