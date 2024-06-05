<script lang="ts">
	import * as config from '$lib/site/config';
	import Card from '$lib/ui/card.svelte';

	export let data;
</script>

<svelte:head>
	<title>Blog | ZERO</title>
	<meta property="og:site_name" content="Blog | ZERO" />
	<meta property="og:title" content="Personal blog from ZERO" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={config.siteImage} />
	<meta name="description" content={config.siteDescription} />
	<meta name="twitter:description" content={config.siteDescription} />
	<meta property="og:description" content={config.siteDescription} />
	<meta property="og:image" content={config.siteImage} />
	<meta name="twitter:image" content={config.siteImage} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image:alt" content={config.siteDescription} />
	<meta name="twitter:image:alt" content={config.siteDescription} />
</svelte:head>
<div class="flex min-h-[100dvh] flex-col">
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
					{#each data.projects as post}
						<Card
							icon={post.icon}
							title={post.title}
							subtitle={post.subtitle}
							description={post.description}
							slug="/projects/{post.slug}"
							externallink={post.externallink}
						/>
					{/each}
				</div>
			</div>
		</section>
	</main>
</div>
