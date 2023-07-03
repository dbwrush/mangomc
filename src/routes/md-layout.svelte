<script context="module">
	import img from '$lib/ImgWrapper.svelte'
	export { img }
</script>

<script>
	export let title
	export let description = 'A new, community-focused Minecraft server.'
	export let image
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mangomc.net/" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />

	<!-- Twitter -->
	<meta property="twitter:url" content="https://mangomc.net/" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	{#if image}
		<meta property="og:image" content={image} />
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="twitter:image" content={image} />
	{/if}
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
