<script lang="ts">
	import { formatDate } from '$lib/utils/index';
	import * as config from '$lib/site/config';
	export let title;
	export let published;
	export let description;
	export let contributors;
	export let tags;
	let image = `${config.postImage}${encodeURIComponent(title)}`;
</script>

<svelte:head>
	<title>{title}</title>

	<meta content={description} name="description" />

	<meta content={title} property="og:title" />
	<meta content={image} property="og:image" />
	<meta content={config.siteUrl} property="og:url" />
	<meta content={description} property="og:description" />
	<meta content={config.siteName} property="og:site_name" />

	<meta content={config.twitterHandle} name="twitter:creator" />
	<meta content="summary_large_image" name="twitter:card" />
	<meta content={title} name="twitter:title" />
	<meta content={description} name="twitter:description" />
	<meta content={image} name="twitter:image" />
</svelte:head>

<header class="mx-auto mt-8 max-w-[65ch] p-2">
	<h1 class="text-balance text-4xl font-bold">{title}</h1>
	<div class="mt-2 flex space-x-2">
		{#each tags as tag}
			<a
				target="_blank"
				class="uppercase duration-200 hover:scale-110"
				title={tag}
				href="/tag/{tag}"
			>
				#{tag}
			</a>
		{/each}
	</div>

	<p class="text-gray-500">Published {formatDate(published)}</p>
	<div class="mt-2 flex -space-x-2">
		{#each contributors as name}
			<a
				target="_blank"
				class="duration-200 hover:z-50 hover:scale-110"
				title={name}
				href="https://github.com/{name}"
			>
				<img
					src="https://github.com/{name}.png"
					class="size-8 rounded-full border-2 border-white"
					alt="{name} Avatar"
				/>
			</a>
		{/each}
	</div>
</header>
<div class="prose mx-auto mb-20 overflow-auto p-2">
	<slot></slot>
</div>
