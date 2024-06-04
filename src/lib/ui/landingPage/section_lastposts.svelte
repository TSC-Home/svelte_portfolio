<script lang="ts">
	import type { Post } from '$lib/types';
	import ErrorCard from '../error_card.svelte';
	export let posts: Post[];
</script>

<section id="projects" class=" flex w-full justify-center bg-gray-100 py-12 md:py-24 lg:py-32">
	<div class="animate-fadeIn animate-delay-[1000ms] container px-4 md:px-6">
		<div class="flex flex-col items-center justify-center space-y-4 text-center">
			<div class="animate-slideInUp animate-delay-[950ms] space-y-2">
				<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Last Posts</h2>
				<p
					class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
				>
					Check out some of my last Blog Posts.
				</p>
			</div>
		</div>
		<div class="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
			{#if posts.length <= 1}
				<ErrorCard></ErrorCard>
			{:else}
				<!-- Project 1 -->
				<a
					href="blog/{posts[0].slug}"
					class=" rounded-lg border border-gray-300 bg-white shadow-sm duration-700 hover:scale-105"
				>
					<div
						class="animate-slideInUp animate-delay-[1000ms] flex flex-row items-center gap-4 space-y-1.5 p-6"
					>
						<p class="icon">{posts[0].icon ? posts[0].icon : 'error'}</p>
						<div class="flex flex-col gap-1">
							<h3 class="text-balance text-2xl font-semibold leading-none tracking-tight">
								{posts[0].title ? posts[0].title : 'Oh no! No title found.'}
							</h3>
							<p class=" text-sm">
								{posts[0].subtitle ? posts[0].subtitle : ''}
							</p>
						</div>
					</div>
					<div class="flex flex-col p-6">
						<p class="text-sm text-gray-500">
							{posts[0].description ? posts[0].description : ''}
						</p>
						<div class="flex items-center gap-4 text-sm">
							<p
								class="inline-flex h-fit items-center justify-center rounded-md bg-gray-900 px-4 py-1 text-center text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
							>
								View Project
							</p>
							{#if posts[0].external_link}
								<a
									class="inline-flex h-fit items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-1 text-center text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
									target="_blank"
									rel="noopener noreferrer"
									href={posts[0].external_link}
								>
									<p class="icon mr-1">captive_portal</p>
									{posts[0].external_link_text ? posts[0].external_link_text : 'External Link'}
								</a>
							{/if}
						</div>
					</div>
				</a>
				<!-- Project 2 -->
				<a
					href="blog/{posts[1].slug}"
					class=" rounded-lg border border-gray-300 bg-white shadow-sm duration-700 hover:scale-105"
				>
					<div
						class="animate-slideInUp animate-delay-[1000ms] flex flex-row items-center gap-4 space-y-1.5 p-6"
					>
						<p class="icon w-10">{posts[1].icon ? posts[1].icon : 'error'}</p>
						<div class="flex flex-col gap-1">
							<h3 class=" text-balance text-2xl font-semibold leading-none tracking-tight">
								{posts[1].title ? posts[1].title : 'Oh no! No title found.'}
							</h3>
							<p class=" text-sm">
								{posts[1].subtitle ? posts[1].subtitle : 'How is my subtitel? 🦕'}
							</p>
						</div>
					</div>
					<div class=" flex flex-col gap-2 p-6">
						<p class="text-sm text-gray-500">
							{posts[1].description ? posts[1].description : ''}
						</p>
						<div class="flex items-center gap-4 text-sm">
							<p
								class="inline-flex h-fit items-center justify-center rounded-md bg-gray-900 px-4 py-1 text-center text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
							>
								View Project
							</p>
							{#if posts[1].external_link}
								<a
									class="inline-flex h-fit items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-1 text-center text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
									target="_blank"
									rel="noopener noreferrer"
									href={posts[1].external_link}
								>
									<p class="icon mr-1">captive_portal</p>
									{posts[1].external_link_text ? posts[1].external_link_text : 'External Link'}
								</a>
							{/if}
						</div>
					</div>
				</a>
			{/if}
		</div>
		<div class="flex justify-center">
			<a
				href="/blog"
				class="text-md rounded-md bg-black p-2 text-white transition-transform delay-300 hover:scale-105 active:bg-gray-800"
			>
				More Posts</a
			>
		</div>
	</div>
</section>
