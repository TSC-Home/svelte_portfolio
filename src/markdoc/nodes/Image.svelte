<script lang="ts">
	export let src: string;
	export let alt: string;
	export let title: string;
</script>

<div class="max-w-[65ch]">
	<img class="not-porse mx-auto rounded-sm duration-200 hover:scale-105" {src} {alt} {title} />
</div>
