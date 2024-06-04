<script lang="ts">
	import { formatDate } from '$lib/utils/index';
	export let title;
	export let published;
	export let contributors;
	export let tags;
</script>

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
