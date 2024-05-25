<script lang="ts">
	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';

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
	function initAnalytics() {
		// do something with segment.io or google analytics etc
	}
</script>

<svelte:head>
	<title>Home | ZERO</title>
	<meta
		name="description"
		content="ZERO is a backend developer and AI engineer with a passion for building scalable and efficient web applications and artificial intelligence. synthetix.me"
	/>
</svelte:head>
<div class="flex min-h-[100dvh] flex-col">
	<header
		class="fixed z-10 flex h-16 w-full items-center justify-between border bg-white px-4 lg:px-6"
	>
		<div class="flex">
			<a class="flex items-center justify-center" href="/">
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
			<section
				title={data.spotify.currentlyPlaying
					? `Listen to ${data.spotify.title} by ${data.spotify.artist[0].name}`
					: 'Currently not listening to music'}
				class="animate-fadeIn animate-delay-[1000ms] ml-2 mt-0.5 max-w-[500px] items-center truncate rounded-lg bg-gray-100 p-3"
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
					<p class="my-auto truncate text-[14px]">
						{#if data.spotify.currentlyPlaying}
							{data.spotify.title} by
							<a href={data.spotify.url} class=" hover:underline">
								{#each data.spotify.artist as item}
									{item.name}
									{#if item !== data.spotify.artist[data.spotify.artist.length - 1]},&#160;
									{/if}
								{/each}
							</a>
							| {formatTime(Math.min(elapsed, data.spotify.time.duration))}
						{:else}
							Curently not listening to music
						{/if}
					</p>
				</div>
			</section>
		</div>
		<div>
			<nav class="ml-auto flex gap-4 sm:gap-6">
				<a class="text-sm font-medium underline-offset-4 hover:underline" href="#projects">
					Projects
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
		</div>
	</header>
	<main class="flex-1">
		<section class="w-full p-12 md:p-24 lg:p-32">
			<div class="container px-4 md:px-6">
				<div class="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
					<div class="space-y-4">
						<div class="animate-fadeIn animate-delay-[1000ms]">
							<h1
								class="animate-slideInUp animate-delay-[950ms] flex text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
							>
								ZERO
							</h1>
							<h2
								class="animate-slideInUp animate-delay-[950ms] flex text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl"
							>
								Backend Developer & <br /> AI Engeneer
							</h2>
						</div>
						<div class="animate-fadeIn animate-delay-[1000ms]">
							<p
								class="animate-slideInUp animate-delay-[950ms] max-w-[600px] text-gray-500 md:text-xl"
							>
								Experienced backend developer with a passion for building scalable and efficient web
								applications and artificial intelligence. Proficient in multiple programming
								languages and frameworks.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="projects" class=" flex w-full justify-center bg-gray-100 py-12 md:py-24 lg:py-32">
			<div class="animate-fadeIn animate-delay-[1000ms] container px-4 md:px-6">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="animate-slideInUp animate-delay-[950ms] space-y-2">
						<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Featured Projects
						</h2>
						<p
							class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Check out some of my recent projects.
						</p>
					</div>
				</div>
				<div class="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
					<div class=" rounded-lg border bg-white shadow-sm duration-700 hover:scale-105">
						<div
							class="animate-slideInUp animate-delay-[1000ms] flex flex-row items-center gap-4 space-y-1.5 p-6"
						>
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
								class="h-8 w-8"
							>
								<rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
								<rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
								<line x1="6" x2="6.01" y1="6" y2="6"></line>
								<line x1="6" x2="6.01" y1="18" y2="18"></line>
							</svg>
							<div class="grid gap-1">
								<h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
									API Gateway
								</h3>
								<p class=" text-sm">A scalable and secure API gateway for microservices.</p>
							</div>
						</div>
						<div class="grid gap-2 p-6">
							<p class="text-sm text-gray-500">
								Developed a robust API gateway using Node.js, Express, and MongoDB to handle
								authentication, authorization, and request routing for a microservices architecture.
							</p>
							<div class="flex items-center gap-4 text-sm">
								<a
									class="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
									href="#"
								>
									View Project
								</a>
								<a
									class="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
									href="#"
								>
									GitHub
								</a>
							</div>
						</div>
					</div>
					<div class="  rounded-lg border bg-white shadow-sm duration-700 hover:scale-105">
						<div
							class="animate-slideInUp animate-delay-[1000ms] flex flex-row items-center gap-4 space-y-1.5 p-6"
						>
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
								class="h-8 w-8"
							>
								<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
								<path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
								<path d="M3 12A9 3 0 0 0 21 12"></path>
							</svg>
							<div class="grid gap-1">
								<h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
									Event Sourcing Service
								</h3>
								<p class=" text-sm">A scalable event sourcing service for tracking user actions.</p>
							</div>
						</div>
						<div class="grid gap-2 p-6">
							<p class="text-sm text-gray-500">
								Designed and implemented an event sourcing service using Node.js, RabbitMQ, and
								MongoDB to capture and replay user actions for a complex web application.
							</p>
							<div class="flex items-center gap-4 text-sm">
								<a
									class="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
									href="#"
								>
									View Project
								</a>
								<a
									class="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
									href="#"
								>
									GitHub
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="skills" class=" flex w-full justify-center py-12 md:py-24 lg:py-32">
			<div class="container px-4 md:px-6">
				<div class="cc flex flex-col items-center space-y-4 text-center">
					<div class="space-y-2">
						<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
						<p
							class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Here are some of the technologies I'm proficient in.
						</p>
					</div>
				</div>
				<div class="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
					<div class="grid gap-4">
						<div class="grid gap-1">
							<h3 class="text-lg font-bold">Programming Languages</h3>
							<div class="flex flex-wrap gap-2">
								<div
									class="bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-green-500/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									Node.js
								</div>
								<div
									class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-blue-500/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									Typescript
								</div>
								<div
									class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-orange-500/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									Rust
								</div>
								<div
									class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-blue-500/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									Python
								</div>
								<div
									class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-blue-500/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									C++
								</div>
							</div>
						</div>
						<div class="grid gap-1">
							<h3 class="text-lg font-bold">Databases</h3>
							<div class="flex flex-wrap gap-2">
								<div
									class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-green-500/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									MongoDB
								</div>
								<div
									class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-blue-500/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									PostgreSQL
								</div>
								<div
									class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-red-500/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									Redis
								</div>
								<div
									class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									Pocketbase
								</div>
							</div>
						</div>
					</div>
					<div class="grid gap-4">
						<div class="grid gap-1">
							<h3 class="text-lg font-bold">Frameworks &amp; Libraries</h3>
							<div class="flex flex-wrap gap-2">
								<div
									class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-orange-400/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									tensorflow
								</div>
								<div
									class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									FastAPI
								</div>
								<div
									class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-orange-500/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									PyTorch
								</div>
								<div
									class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-orange-600/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									Svelte Kit
								</div>
								<div
									class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-purple-500/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									Astro
								</div>
								<div
									class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									Next.js
								</div>
							</div>
						</div>
						<div class="grid gap-1">
							<h3 class="text-lg font-bold">Infrastructure</h3>
							<div class="flex flex-wrap gap-2">
								<div
									class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-blue-500/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									Docker
								</div>
								<div
									class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-blue-500/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									Kubernetes
								</div>
								<div
									class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-yellow-500/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									AWS
								</div>
								<div
									class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									Vercel
								</div>
							</div>
						</div>
					</div>
					<div class="grid gap-4">
						<div class="grid gap-1">
							<h3 class="text-lg font-bold">Methodologies</h3>
							<div class="flex flex-wrap gap-2">
								<div
									class="focus:ring-ring bg-secondary hover:bg-secondary/80 inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									Agile
								</div>
								<div
									class="focus:ring-ring bg-secondary hover:bg-secondary/80 inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									TDD
								</div>
								<div
									class="focus:ring-ring bg-secondary hover:bg-secondary/80 inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									Microservices
								</div>
								<div
									class="focus:ring-ring bg-secondary hover:bg-secondary/80 inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									Supervised Learning
								</div>
							</div>
						</div>
						<div class="grid gap-1">
							<h3 class="text-lg font-bold">Tools</h3>
							<div class="flex flex-wrap gap-2">
								<div
									class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-orange-500/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									Git
								</div>
								<div
									class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									GitHub
								</div>
								<div
									class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-blue-500/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									Vscode
								</div>
								<div
									class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-purple-500/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
								>
									Insomnia
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="more" class=" flex w-full justify-center bg-gray-100 py-12 md:py-24 lg:py-32">
			<div class="container px-4 md:px-6">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">More Links</h2>
						<p
							class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Check all of my suff out. I'm sure you'll find something interesting.
						</p>
					</div>
				</div>
				<div class="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
					<div class=" rounded-lg border bg-white shadow-sm duration-700 hover:scale-105">
						<div class="flex flex-row items-center gap-4 space-y-1.5 p-6">
							<div class="grid gap-1">
								<h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
									Blog
								</h3>
								<p class=" text-sm">A little tech block.</p>
							</div>
						</div>
						<div class="grid gap-2 p-6">
							<p class="text-sm text-gray-500">
								My blog is a platform for me to share my interests and thoughts on various topics. I
								hope you will find something of interest on my blog.
							</p>
							<div class="flex items-center gap-4 text-sm">
								<a
									class="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
									href="/blog"
								>
									View My Blog
								</a>
							</div>
						</div>
					</div>
					<div class=" rounded-lg border bg-white shadow-sm duration-700 hover:scale-105">
						<div class="flex flex-row items-center gap-4 space-y-1.5 p-6">
							<div class="grid gap-1">
								<h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
									Portfolio
								</h3>
								<p class=" text-sm">A list off all my public projects.</p>
							</div>
						</div>
						<div class="grid gap-2 p-6">
							<p class="text-sm text-gray-500">
								I've put together a list of all my projects, both published and in progress. If
								you're interested in seeing more, please feel free to drop by.
							</p>
							<div class="flex items-center gap-4 text-sm">
								<a
									class="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
									href="/projects"
								>
									View My Projects
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
	<footer
		class="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6"
	>
		<p class="text-xs text-gray-500">© {new Date().getUTCFullYear()} ZERO. All rights reserved.</p>
		<nav class="flex gap-4 sm:ml-auto sm:gap-6">
			<a class="text-xs underline-offset-4 hover:underline" href="/github"> GitHub </a>
			<a class="text-xs underline-offset-4 hover:underline" href="/api"> API'S </a>
			<a class="text-xs underline-offset-4 hover:underline" href="mailto:hello@synthetic.me">
				Contact
			</a>
		</nav>
	</footer>
</div>
