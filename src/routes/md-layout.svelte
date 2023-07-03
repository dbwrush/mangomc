<script context="module">
	import img from '$lib/ImgWrapper.svelte'
	export { img }
</script>

<script>
	export let title
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<article>
	<slot />
</article>

<style>
	article {
		margin: 0 auto;
		width: 60rem;
		max-width: 100%;
	}
</style>
