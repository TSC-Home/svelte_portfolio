<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$lib/ui/header.svelte';
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/site/config';
	import Footer from '$lib/ui/footer.svelte';
	let slug = $page.params.projectpostslug;
	export let data;
	const { content, frontmatter } = data.projectpost;
</script>

<svelte:head>
	<title>{frontmatter.title}</title>
</svelte:head>

<main>
	<Header {data} />
	<div class="flex justify-center pt-28">
		<div class="hidden md:flex">
			<a
				href="/projects"
				class="icon fixed left-28 rounded-full bg-gray-100 p-2 hover:border-2 hover:border-gray-400 hover:bg-gray-200"
				>arrow_back</a
			>
		</div>

		<article class="prose mb-20 overflow-auto p-2">
			<header>
				<h1 class="title">{frontmatter.title}</h1>
				<p class="published">Published {formatDate(frontmatter.published)}</p>
			</header>

			{@html content}
		</article>
	</div>
	<div class="fixed bottom-0 w-full">
		<Footer />
	</div>
</main>

<style>
	.title {
		max-width: 600px;
		margin-inline: auto;
	}

	.published {
		margin-top: var(--spacing-24);
	}
</style>
