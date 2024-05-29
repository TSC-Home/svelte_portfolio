<script lang="ts">
	import Header from '$lib/ui/header.svelte';
	import { formatDate } from '$lib/utils';
	export let data;
	const { content, frontmatter } = data.blogpost;
</script>

<div>
	<Header {data} />
</div>
<article class="prose p-28">
	<header>
		<h1 class="title">{frontmatter.title}</h1>
		<p class="published">Published {formatDate(frontmatter.published)}</p>
	</header>

	{@html content}
</article>
