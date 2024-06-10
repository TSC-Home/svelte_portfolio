<script lang="ts">
	export let src: string;
	export let alt: string;
	export let title: string;
	let imgpopup = false;
</script>

<button on:click={() => (imgpopup = !imgpopup)} class="max-w-[65ch]">
	<img class="not-porse mx-auto rounded-sm duration-200 hover:scale-105" {src} {alt} {title} />
	<p class="not-porse text-sm text-gray-500">
		Quelle: <a class="not-porse text-sm text-gray-500" href={src}>{src}</a>
	</p>
</button>

{#if imgpopup}
	<!-- Image Popup -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-200"
	>
		<!-- Image close button -->
		<div class="max-w-[65ch] rounded-sm bg-white p-4 shadow-lg">
			<button
				on:click={() => (imgpopup = false)}
				class="icon fixed z-50 h-8 w-8 text-gray-500 duration-200 hover:text-gray-400"
			>
				close
			</button>
			<img class="mx-auto rounded-sm" {src} {alt} {title} />
			<p class="text-sm text-gray-500">
				Quelle: <a class="text-sm text-gray-500" href={src}>{src}</a>
			</p>
		</div>
	</div>
{/if}
