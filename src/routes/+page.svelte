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
	<title>Home | ZERO</title>
	<meta property="og:site_name" content="Home | ZERO" />
	<meta property="og:title" content="Personal Website from ZERO" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{config.siteUrl}/favicon.png" />
	<meta name="description" content={config.siteDescription} />
	<meta name="twitter:description" content={config.siteDescription} />
	<meta property="og:description" content={config.siteDescription} />
	<meta property="og:image" content="{config.siteUrl}/favicon.png" />
	<meta name="twitter:image" content="{config.siteUrl}/favicon.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image:alt" content={config.siteDescription} />
	<meta name="twitter:image:alt" content={config.siteDescription} />
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
