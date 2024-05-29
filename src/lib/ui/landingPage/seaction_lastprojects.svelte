<script lang="ts">
	import type { Post } from '$lib/types';
	import ErrorCard from '../error_card.svelte';
	export let projects: Post[];
</script>

<section id="projects" class=" flex w-full justify-center bg-gray-100 py-12 md:py-24 lg:py-32">
	<div class="animate-fadeIn animate-delay-[1000ms] container px-4 md:px-6">
		<div class="flex flex-col items-center justify-center space-y-4 text-center">
			<div class="animate-slideInUp animate-delay-[950ms] space-y-2">
				<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Last Projects</h2>
				<p
					class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
				>
					Check out some of my last projects.
				</p>
			</div>
		</div>
		<div class="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
			{#if projects.length <= 1}
				<ErrorCard></ErrorCard>
			{:else}
				<!-- Project 1 -->
				<div class=" rounded-lg border bg-white shadow-sm duration-700 hover:scale-105">
					<div
						class="animate-slideInUp animate-delay-[1000ms] flex flex-row items-center gap-4 space-y-1.5 p-6"
					>
						<p class="icon">{projects[0].icon ? projects[0].icon : 'error'}</p>
						<div class="grid gap-1">
							<h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
								{projects[0].title ? projects[0].title : 'Oh no! No title found.'}
							</h3>
							<p class=" text-sm">
								{projects[0].subtitle ? projects[0].subtitle : 'How is my subtitel? 🦕'}
							</p>
						</div>
					</div>
					<div class="grid gap-2 p-6">
						<p class="text-sm text-gray-500">
							{projects[0].description ? projects[0].description : ''}
						</p>
						<div class="flex items-center gap-4 text-sm">
							<a
								class="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
								href="projects/{projects[0].slug}"
							>
								View Project
							</a>
							{#if projects[0].external_link}
								<a
									class="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
									target="_blank"
									rel="noopener noreferrer"
									href={projects[0].external_link}
								>
									<p class="icon mr-1">captive_portal</p>
									{projects[0].external_link_text
										? projects[0].external_link_text
										: 'External Link'}
								</a>
							{/if}
						</div>
					</div>
				</div>
				<!-- Project 2 -->
				<div class=" rounded-lg border bg-white shadow-sm duration-700 hover:scale-105">
					<div
						class="animate-slideInUp animate-delay-[1000ms] flex flex-row items-center gap-4 space-y-1.5 p-6"
					>
						<p class="icon">{projects[1].icon ? projects[1].icon : 'error'}</p>
						<div class="grid gap-1">
							<h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
								{projects[1].title ? projects[1].title : 'Oh no! No title found.'}
							</h3>
							<p class=" text-sm">
								{projects[1].subtitle ? projects[1].subtitle : 'How is my subtitel? 🦕'}
							</p>
						</div>
					</div>
					<div class="grid gap-2 p-6">
						<p class="text-sm text-gray-500">
							{projects[1].description ? projects[1].description : ''}
						</p>
						<div class="flex items-center gap-4 text-sm">
							<a
								class="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
								href="projects/{projects[1].slug}"
							>
								View Project
							</a>
							{#if projects[1].external_link}
								<a
									class="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
									target="_blank"
									rel="noopener noreferrer"
									href={projects[1].external_link}
								>
									<p class="icon mr-1">captive_portal</p>
									{projects[1].external_link_text
										? projects[1].external_link_text
										: 'External Link'}
								</a>
							{/if}
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
