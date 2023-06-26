<script>
	import { getContext } from 'svelte'
	const zoomedInImg = getContext('zoomedInImg')
	export let src
	export let alt
</script>

<button on:click={() => ($zoomedInImg = { src, alt, ...$$restProps })}>
	<img {src} {alt} {...$$restProps} />
</button>

<style>
	button {
		cursor: zoom-in;
	}
	button img {
		width: 100%;
		height: 100%;
		display: block;
	}
</style>
