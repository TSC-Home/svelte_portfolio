<script lang="ts">
	import Header from '$lib/ui/header.svelte';
	import Footer from '$lib/ui/footer.svelte';
	import Morelinks from '$lib/ui/landingPage/section_rountes.svelte';
	import Skills from '$lib/ui/landingPage/section_skills.svelte';
	import Herosection from '$lib/ui/landingPage/section_hero.svelte';
	import Lastprojects from '$lib/ui/landingPage/seaction_lastprojects.svelte';

	export let data;
</script>

<svelte:head>
	<title>Home | ZERO</title>
</svelte:head>
<div class="flex min-h-[100dvh] flex-col">
	<Header {data} />
	<main class="flex-1">
		<Herosection />
		<!-- <Lastprojects projects={data.projects} /> -->
		<Skills />
		<Morelinks />
	</main>
	<Footer />
</div>
