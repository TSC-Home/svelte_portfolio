<script lang="ts">
	import Footer from '$lib/ui/footer.svelte';
	import Card from '$lib/ui/project_posts_cards.svelte';
	import Header from '$lib/ui/header.svelte';
	import ErrorCard from '$lib/ui/error_card.svelte';
	import * as config from '$lib/site/config';

	export let data;
</script>

<svelte:head>
	<title>Portfolio | ZERO</title>
	<!-- <meta property="og:site_name" content="Portfolio | ZERO" />
	<meta property="og:title" content="Personal Portfolio from ZERO" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{config.siteUrl}/favicon.png" />
	<meta name="description" content={config.siteDescription} />
	<meta name="twitter:description" content={config.siteDescription} />
	<meta property="og:description" content={config.siteDescription} />
	<meta property="og:image" content="{config.siteUrl}/favicon.png" />
	<meta name="twitter:image" content="{config.siteUrl}/favicon.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image:alt" content={config.siteDescription} />
	<meta name="twitter:image:alt" content={config.siteDescription} /> -->
</svelte:head>
<div class="flex min-h-[100dvh] flex-col">
	<Header {data} />
	<main class="flex-1">
		<section id="more" class=" flex w-full justify-center bg-gray-100 py-24 md:py-24 lg:py-32">
			<div class="container px-4 md:px-6">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Portfolio</h2>
						<p
							class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Hello there!👋 I've put together a little collection of my work that I'm happy to
							share with you. I hope you enjoy it!
						</p>
					</div>
				</div>
				<div class="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
					{#if data.projects}
						{#each data.projects as project, i}
							<Card projects={project} />
						{/each}
					{:else}
						<div>
							<ErrorCard />
						</div>
					{/if}
				</div>
			</div>
		</section>
	</main>
	<Footer />
</div>
