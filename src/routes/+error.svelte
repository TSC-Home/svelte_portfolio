<script lang="ts">
	import { page } from '$app/stores';
	let counter = 0;
</script>

<svelte:head>
	<title>404 | ZERO</title>
	<meta
		name="description"
		content="ZERO is a backend developer and AI engineer with a passion for building scalable and efficient web applications and artificial intelligence. synthetix.me"
	/>
	<meta
		name="keywords"
		content="backend developer, ai engineer, web applications, artificial intelligence, synthetix.me, Zero, ZERO,tschome, tsc-home, TSC-HOME, synthetix, planty, projects, portfolio, work, experience, contact, contact me, contact form, email, email me"
	/>
	<meta name="author" content="ZERO" />
	<meta name="robots" content="index, follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>
<main class="flex h-screen items-center justify-center bg-white">
	<div class="text-center">
		<h1 class="text-6xl font-bold text-gray-800">
			<button on:click={() => (counter = counter + 1)} class="cursor-default">{$page.status}</button
			>
		</h1>
		<p class="text-2xl text-gray-600">Page {$page.error?.message}</p>
		<p class="text-gray-500">The page you are looking for does not exist or somthing went wrong.</p>
		<a href="/" class="text-black hover:underline">Go back to home</a>
	</div>
	{#if counter > 20}
		<p class=" fixed bottom-0 left-1">🦕</p>
	{/if}
</main>
