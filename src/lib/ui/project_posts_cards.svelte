<script lang="ts">
	export let projects;
</script>

<div class="animate-fadeIn animate-delay-[1000ms] flex justify-center px-2">
	<a
		href="projects/{projects.slug}"
		class=" animate-slideInUp animate-delay-[950ms] rounded-lg border border-gray-300 bg-white shadow-sm duration-700 hover:scale-105 sm:w-full"
	>
		<div class="flex flex-row items-center gap-4 space-y-1.5 p-6">
			<p class="icon">{projects.icon ? projects.icon : 'error'}</p>
			<div class="grid gap-1">
				<h3 class=" break-words text-2xl font-semibold leading-none tracking-tight">
					{projects.title}
				</h3>
				<p class=" text-sm">
					{projects.subtitle ? projects.subtitle : 'Oh no! I can´t find the suptitle! 🦖'}
				</p>

				<div
					class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
				>
					{projects.working_status ? projects.working_status : 'No status found'}
				</div>
			</div>
		</div>
		<div class="grid gap-2 p-6">
			<p class="text-sm text-gray-500">
				{projects.description}
			</p>
			<div class="flex items-center gap-4 text-sm">
				<p
					class="inline-flex h-fit items-center justify-center rounded-md bg-gray-900 px-4 py-1 text-center text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
				>
					View {projects.title}
				</p>

				{#if projects.external_link}
					<a
						class="inline-flex h-fit items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-1 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
						target="_blank"
						rel="noopener noreferrer"
						href={projects.external_link}
					>
						<p class="icon mr-1">captive_portal</p>
						{projects.external_link_text ? projects.external_link_text : 'External Link'}
					</a>
				{/if}
			</div>
		</div>
	</a>
</div>
