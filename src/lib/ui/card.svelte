<script lang="ts">
	import type { MaterialIcon } from 'material-icons';
	export let icon: string | null | MaterialIcon;
	export let title: string;
	export let subtitle: string;
	export let description: string | null;
	export let slug: string;
	export let externallink: string | null;
	console.log(externallink);
</script>

<div class="animate-fadeIn animate-delay-[1000ms]">
	<div
		class=" animate-slideInUp animate-delay-[950ms] rounded-lg border border-gray-300 bg-white shadow-sm duration-700 hover:scale-105"
	>
		<div class="flex flex-row items-center gap-4 space-y-1.5 p-6">
			{#if icon}
				<p class="icon">{icon}</p>
			{/if}
			<div class="flex flex-col gap-1">
				<h3 class="text-balance text-2xl font-semibold leading-none tracking-tight">
					{title}
				</h3>
				<p class=" text-sm">{subtitle}</p>
			</div>
		</div>
		<div class="flex flex-col gap-2 p-6">
			{#if description}
				<p class="text-sm text-gray-500">{description}</p>
			{/if}
			<div class="flex items-center gap-4 text-sm">
				<a
					href={slug}
					class="inline-flex h-fit items-center justify-center rounded-md bg-gray-900 px-4 py-1 text-center text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
					>Read More</a
				>
				{#if externallink}
					<a
						class="inline-flex h-fit items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-1 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
						target="_blank"
						rel="noopener noreferrer"
						href={externallink}
					>
						<p class="icon mr-1">captive_portal</p>
						Visit
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>
