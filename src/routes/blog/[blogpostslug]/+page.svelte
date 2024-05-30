<script lang="ts">
	import Header from '$lib/ui/header.svelte';
	import { formatDate } from '$lib/utils';
	export let data;
	const { content, frontmatter } = data.blogpost;
</script>

<div>
	<Header {data} />
	<div class="fixed hidden p-28 md:flex lg:flex">
		<a href="/blog" class=" hover:underline">Go Back</a>
	</div>
	<div class="flex justify-center">
		<article class="prose w-[800px] bg-gray-100 p-28">
			<header>
				<h1 class="title">{frontmatter.title}</h1>
				<p class="published">Published {formatDate(frontmatter.published)}</p>
			</header>

			{@html content}
		</article>
	</div>
</div>
