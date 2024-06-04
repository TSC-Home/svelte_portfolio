<script>
	import Footer from '$lib/ui/footer.svelte';
	import Header from '$lib/ui/header.svelte';
	import '../app.css';
	export let data;
</script>

<Header {data}></Header>
<slot />
<Footer />
