<script lang="ts">
	export let content: string;
	export let language;
	import { codeToHtml } from 'shiki';
	import { onMount } from 'svelte';
	let code: string;

	onMount(async () => {
		code = await codeToHtml(content, {
			lang: language,
			theme: 'poimandres'
		});
	});

	let copied = false;

	function copyTextToClipboard() {
		navigator.clipboard.writeText(content);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 500);
	}
</script>

<!-- Fabian https://github.com/fabian9799 -->
<div
	class="not-prose border-2 {copied
		? 'border-green-500'
		: 'border-zinc-800'} code-block relative my-4 overflow-hidden rounded-md duration-200"
>
	<div class="absolute right-0 top-0 p-2">
		<button
			class="rounded-md bg-gray-700 p-1 text-white duration-300 active:bg-gray-500"
			on:click={copyTextToClipboard}
		>
			Copy
		</button>
	</div>

	{@html code}
</div>

<style>
	.code-block :global(pre) {
		padding: 20px;
		white-space: pre-wrap;
		overflow: auto;
	}
</style>
