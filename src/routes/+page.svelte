<script lang="ts">
	import Header from '$lib/header.svelte';
	import Footer from '$lib/home/footer.svelte';
	import Morelinks from '$lib/home/morelinks.svelte';
	import Skills from '$lib/home/skills.svelte';
	import Featuredprojects from '$lib/home/featuredprojects.svelte';
	import Herosection from '$lib/home/herosection.svelte';

	export let data;
</script>

<svelte:head>
	<title>Home | ZERO</title>
	<meta
		name="description"
		content="ZERO is a backend developer and AI engineer with a passion for building scalable and efficient web applications and artificial intelligence. synthetix.me"
	/>
	<meta
		name="keywords"
		content="backend developer, ai engineer, web applications, artificial intelligence, synthetix.me, Zero, ZERO,tschome, tsc-home, TSC-HOME, synthetix, planty"
	/>
	<meta name="author" content="ZERO" />
	<meta name="robots" content="index, follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>
<div class="flex min-h-[100dvh] flex-col">
	<Header {data} />
	<main class="flex-1">
		<Herosection />
		<Featuredprojects />
		<Skills />
		<Morelinks />
	</main>
	<Footer />
</div>
