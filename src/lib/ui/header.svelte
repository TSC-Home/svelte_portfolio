<script lang="ts">
	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';

	export let data;
	let elapsed = data.spotify.time.progress;
	let interval: any;

	function formatTime(ms: number) {
		const totalSeconds = Math.floor(ms / 1000);
		const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
		const seconds = String(totalSeconds % 60).padStart(2, '0');
		return `${minutes}:${seconds}`;
	}

	onMount(() => {
		interval = setInterval(function () {
			if (elapsed < data.spotify.time.duration) {
				elapsed += 1000;
			} else {
				invalidateAll();
				setTimeout(() => {
					elapsed = data.spotify.time.progress;
				}, 1000);
			}
		}, 1000);
	});
</script>

<header
	class="fixed z-10 flex h-16 w-full items-center justify-between border bg-white px-4 lg:px-6"
>
	<div class="flex w-full md:justify-start">
		<a class=" hidden items-center justify-center md:flex" href="/">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-6 w-6"
			>
				<polyline points="16 18 22 12 16 6"></polyline>
				<polyline points="8 6 2 12 8 18"></polyline>
			</svg>

			<span class="sr-only">ZERO</span>
		</a>
		{#if $page.route.id === '/'}
			<a class="flex items-center justify-center md:hidden" href="/">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-6 w-6"
				>
					<polyline points="16 18 22 12 16 6"></polyline>
					<polyline points="8 6 2 12 8 18"></polyline>
				</svg>

				<span class="sr-only">ZERO</span>
			</a>
		{:else}
			<button
				on:click={() => history.back()}
				class=" animate-fadeIn animate-delay-[1000ms] flex items-center justify-center md:hidden"
			>
				<p
					class="icon animate-slideInUp animate-delay-[950ms] h-10 w-10 rounded-full bg-neutral-100 p-2"
				>
					arrow_back
				</p>
			</button>
		{/if}

		<section
			title={data.spotify.currentlyPlaying
				? `Listen to ${data.spotify.title} by ${data.spotify.artist[0].name}`
				: 'Currently not listening to music'}
			class="animate-fadeIn animate-delay-[1000ms] ml-2 mt-0.5 w-full items-center truncate rounded-lg bg-gray-100 p-3 md:max-w-[300px]"
		>
			<div class="animate-slideInUp animate-delay-[950ms] flex">
				<div class="flex">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="my-auto mr-3 h-6 w-6"
						version="1.1"
						viewBox="0 0 168 168"
						><path
							fill="#1ED760"
							d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
						></path></svg
					>
				</div>
				<p class="my-auto flex truncate text-[14px]">
					{#if data.spotify.currentlyPlaying}
						{data.spotify.title} by
						<a href={data.spotify.url} class="ml-1 hover:underline">
							{#each data.spotify.artist as item}
								{item.name}
								{#if item !== data.spotify.artist[data.spotify.artist.length - 1]},&#160;
								{/if}
							{/each}
						</a>
						<p class="ml-1 text-gray-500">
							{formatTime(Math.min(elapsed, data.spotify.time.duration))}
						</p>
					{:else}
						Curently not listening to music
					{/if}
				</p>
			</div>
		</section>
	</div>
	<div class="hidden md:flex lg:flex">
		{#if $page.route.id === '/'}
			<nav class="ml-auto flex gap-4 sm:gap-6">
				<a class="text-sm font-medium underline-offset-4 hover:underline" href="/blog"> Blog </a>
				<a class="text-sm font-medium underline-offset-4 hover:underline" href="/projects">
					Portfolio
				</a>
				<a class="text-sm font-medium underline-offset-4 hover:underline" href="#skills">
					Skills
				</a>
				<a
					class="text-sm font-medium underline-offset-4 hover:underline"
					href="mailto:hello@synthetix.me"
				>
					Contact
				</a>
			</nav>
		{:else if $page.route.id === '/projects'}
			<nav class="ml-auto flex gap-4 sm:gap-6">
				<a class="text-sm font-medium underline-offset-4 hover:underline" href="/"> Home </a>
				<a class="text-sm font-medium underline-offset-4 hover:underline" href="/blog"> Blog </a>
				<a
					class="text-sm font-medium underline-offset-4 hover:underline"
					href="mailto:hello@synthetix.me"
				>
					Contact
				</a>
			</nav>
		{:else if $page.route.id === '/blog'}
			<nav class="ml-auto flex gap-4 sm:gap-6">
				<a class="text-sm font-medium underline-offset-4 hover:underline" href="/"> Home </a>
				<a class="text-sm font-medium underline-offset-4 hover:underline" href="/projects">
					Portfolio
				</a>
				<a
					class="text-sm font-medium underline-offset-4 hover:underline"
					href="mailto:hello@synthetix.me"
				>
					Contact
				</a>
			</nav>
		{/if}
	</div>
</header>
