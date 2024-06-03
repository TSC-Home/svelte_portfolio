<script lang="ts">
	import Header from '$lib/ui/header.svelte';
	import Footer from '$lib/ui/footer.svelte';
	import Morelinks from '$lib/ui/landingPage/section_rountes.svelte';
	import Skills from '$lib/ui/landingPage/section_skills.svelte';
	import Herosection from '$lib/ui/landingPage/section_hero.svelte';
	import Lastprojects from '$lib/ui/landingPage/seaction_lastprojects.svelte';
	import * as config from '$lib/site/config';

	export let data;
</script>

<svelte:head>
	<title>{config.siteTitle}</title>

	<meta content={config.siteDescription} name="description" />

	<meta content={config.siteTitle} property="og:title" />
	<meta content={config.siteImage} property="og:image" />
	<meta content={config.siteUrl} property="og:url" />
	<meta content={config.siteDescription} property="og:description" />
	<meta content={config.siteName} property="og:site_name" />

	<meta content={config.twitterHandle} name="twitter:creator" />
	<meta content="summary_large_image" name="twitter:card" />
	<meta content={config.siteTitle} name="twitter:title" />
	<meta content={config.siteDescription} name="twitter:description" />
	<meta content={config.siteImage} name="twitter:image" />
</svelte:head>

<div class="flex min-h-[100dvh] flex-col">
	<Header {data} />
	<main class="flex-1">
		<Herosection />
		<Lastprojects projects={data.projects} />
		<Skills />
		<Morelinks />
	</main>
	<Footer />
</div>
