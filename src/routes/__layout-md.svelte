<script>
	import '../app.postcss'
	import Status from '$lib/Status.svelte'
	import StyleSelector from '$lib/StyleSelector.svelte'
	export let title
	export let hasRibbon = false
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="header">
	<a href="/"><h1>MangoMC</h1></a>
	<p>
		<a class="link-button" href="/survival">Survival SMP</a>
		<a class="link-button" href="/creative">Creative Plots</a>
		<a class="link-button" href="/minigames">Minigames</a>
	</p>
</div>
{#if hasRibbon}
	<div class="ribbon" />
	<div class="ribbon-cover">
		<Status />
	</div>
{/if}
<div class="a-bg min-half-full">
	{#if hasRibbon}
		<a class="overlapping-button" href="https://discord.com/invite/AYctqMETWg">
			Join the Discord!
		</a>
	{/if}
	<div class="page-content {hasRibbon ? '' : 'only-content'}">
		<slot />
	</div>
</div>

<StyleSelector />
