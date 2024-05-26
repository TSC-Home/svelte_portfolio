<script lang="ts">
	export let projects;
</script>

<div class="animate-fadeIn animate-delay-[1000ms]">
	<div
		class=" animate-slideInUp animate-delay-[950ms] rounded-lg border bg-white shadow-sm duration-700 hover:scale-105"
	>
		<div class="flex flex-row items-center gap-4 space-y-1.5 p-6">
			<p class="icon">{projects.icon}</p>
			<div class="grid gap-1">
				<h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
					{projects.title}
				</h3>
				<p class=" text-sm">{projects.description}</p>
				{#if projects.status === 'Completed'}
					<div
						class="focus:ring-ring inline-flex w-fit items-center whitespace-nowrap rounded-full border bg-blue-500/40 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
					>
						Published
					</div>
				{:else if projects.status === 'Working'}
					<div
						class="focus:ring-ring inline-flex w-fit items-center whitespace-nowrap rounded-full border bg-yellow-500/40 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
					>
						Curently working on
					</div>
				{:else if projects.status === 'Archived'}
					<div
						class="focus:ring-ring inline-flex w-fit items-center whitespace-nowrap rounded-full border bg-purple-500/40 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
					>
						{projects.status}
					</div>
				{:else}
					<div
						class="focus:ring-ring bg-secondary inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
					>
						{projects.status}
					</div>
				{/if}
			</div>
		</div>
		<div class="grid gap-2 p-6">
			<p class="text-sm text-gray-500">
				{projects.info}
			</p>
			<div class="flex items-center gap-4 text-sm">
				{#if !projects.direct_redirect}
					<a
						class="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
						href="projects/{projects.name}"
					>
						{#if projects.readmore}
							Read More
						{:else}
							View {projects.my ? 'My' : ''}
							{projects.title}
						{/if}
					</a>
				{/if}
				{#if projects.link !== ''}
					<a
						class="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
						target="_blank"
						rel="noopener noreferrer"
						href={projects.link}
					>
						<p class="icon mr-1">captive_portal</p>
						{projects.linkname === '' ? `${projects.title}` : projects.linkname}
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>
