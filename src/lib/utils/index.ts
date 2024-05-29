import type { DateStyle, Fetch } from '$lib/types';

export async function fetchJSON<Data>(url: string, fetchFn: Fetch = fetch): Promise<Data> {
	const response = await fetchFn(url);
	if (!response.ok) throw new Error(`Error fetching JSON from ${response.url}`);
	return await response.json();
}

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	// Safari is not a good browser and doesn't support the date format '2021-12-31'
	const dateToFormat = new Date(date.replaceAll('-', '/'));
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return dateFormatter.format(dateToFormat);
}

export function formatNumber(number: number, locales = 'en') {
	return new Intl.NumberFormat(locales).format(number);
}
