<script>
    import '../app.css';
    import Status from '$lib/Status.svelte'
    import StyleSelector from '$lib/StyleSelector.svelte';
    export let title
    export let hasRibbon
    hasRibbon = hasRibbon??false
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="header">
    <a href="/"><h1>MangoMC</h1></a>
    <p><a href="/survival">Survival SMP</a> / <a href="/creative">Creative plots</a> / <a href="/minigames">Minigames</a></p>
</div>
{#if hasRibbon}
    <div class="ribbon"></div>
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
    <div class="page-content {hasRibbon?'':'only-content'}">
        <slot />
    </div>
</div>

<StyleSelector />