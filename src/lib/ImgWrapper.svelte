<script>
	import { getContext } from 'svelte'
	const zoomedInImg = getContext('zoomedInImg')
	export let src
	export let alt

	function toggleImg() {
		if ($zoomedInImg) {
			$zoomedInImg = null
		} else {
			$zoomedInImg = { src, alt, ...$$restProps }
		}
	}
</script>

<button aria-label="Zoom in on image" on:click={toggleImg}>
	<img {src} {alt} {...$$restProps} />
</button>

<style>
	button {
		padding: 0;
		margin: 0;
		border: none;
		background: none;
		cursor: zoom-in;
	}
	button img {
		border-radius: 4px;
		width: 100%;
		height: 100%;
		display: block;
	}
</style>
