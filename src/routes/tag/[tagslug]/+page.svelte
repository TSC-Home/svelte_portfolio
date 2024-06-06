<script lang="ts">
	import * as config from '$lib/site/config';
	import Card from '$lib/ui/card.svelte';

	export let data;
	console.log(data);
</script>

<svelte:head>
	<title>Tags | ZERO</title>
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
						<h2 class="text-3xl font-bold uppercase tracking-tighter sm:text-4xl md:text-5xl">
							#{data.slug}
						</h2>
						<p
							class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							You can finde all projects and Blog Posts with the tag <span class="font-bold"
								>#{data.slug}</span
							> on this page.
						</p>
					</div>
				</div>
				<h3 class="text-2xl font-bold uppercase tracking-tighter">Blog Posts</h3>
				<div class="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
					{#if data.blogs.length === 0}
						<Card
							icon="error"
							title="No Blog Posts found"
							subtitle="No Blog Posts found with the tag #{data.slug}"
							description="You can finde all Blog Posts on the Blog page."
							slug=""
							externallink=""
						/>
					{:else}
						{#each data.blogs as post}
							<Card
								icon={post.icon}
								title={post.title}
								subtitle={post.subtitle}
								description={post.description}
								slug="/blog/{post.slug}"
								externallink={post.externallink}
							/>
						{/each}
					{/if}
				</div>
				<h3 class="text-2xl font-bold uppercase tracking-tighter">Projects</h3>
				<div class="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
					{#if data.projects.length === 0}
						<Card
							icon="error"
							title="No Projects found"
							subtitle="No Projects found with the tag #{data.slug}"
							description="You can finde all Projects on the Projects page."
							slug=""
							externallink=""
						/>
					{:else}
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
					{/if}
				</div>
			</div>
		</section>
	</main>
</div>
