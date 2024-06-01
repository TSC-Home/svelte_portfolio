<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<div class="flex h-full bg-zinc-900 p-12 text-3xl">
	<div
		class=" flex w-full flex-col items-center justify-center rounded-[50px] border-8 border-green-500 p-8 text-center text-white"
	>
		<p class="font-bold" style="font-size: 80px">{title}</p>
		<p>{description}</p>
	</div>
</div>
<img
	src="https://beta.synthetix.me/favicon.png"
	alt="OG Image"
	class="fixed bottom-8 left-2 h-5 w-5"
	aria-hidden="true"
/>
