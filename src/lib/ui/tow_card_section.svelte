<script lang="ts">
	import Card from '$lib/ui/card.svelte';
	export let posts;
	export let siteTitle;
	export let siteDescription;
	export let route;
</script>

<section id="projects" class=" flex w-full justify-center bg-gray-100 py-12 md:py-24 lg:py-32">
	<div class="animate-fadeIn animate-delay-[1000ms] container px-4 md:px-6">
		<div class="flex flex-col items-center justify-center space-y-4 text-center">
			<div class="animate-slideInUp animate-delay-[950ms] space-y-2">
				<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{siteTitle}</h2>
				<p
					class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
				>
					{siteDescription}
				</p>
			</div>
		</div>
		<div class="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
			{#each posts as post, Index}
				{#if Index < 2}
					<Card
						title={post.title}
						subtitle={post.subtitle}
						description={post.description}
						icon={post.icon}
						externallink={post.externallink}
						slug="/{route}/{post.slug}"
					/>
				{/if}
			{/each}
		</div>
		<div class="flex justify-center">
			<a
				href="/{route}"
				class="text-md rounded-md bg-black p-2 text-white transition-transform delay-300 hover:scale-105 active:bg-gray-800"
			>
				Show more</a
			>
		</div>
	</div>
</section>
