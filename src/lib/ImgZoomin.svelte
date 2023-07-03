<script>
	import { fade, scale } from 'svelte/transition'
	import { browser } from '$app/environment'
	import { focusTrap } from 'svelte-focus-trap'
	import { getContext } from 'svelte'
	const zoomedInImg = getContext('zoomedInImg')

	$: {
		if (browser) {
			if ($zoomedInImg) document.body.style.overflowY = 'hidden'
			else document.body.style.overflowY = 'auto'
		}
	}
</script>

{#if $zoomedInImg}
	<div
		class="zoomed-in-wrapper"
		transition:fade={{ duration: 100 }}
		use:focusTrap
	>
		<button
			tabindex="-1"
			aria-hidden="true"
			class="escape-button-bg"
			on:click={() => ($zoomedInImg = null)}
		/>
		<img
			transition:scale={{ duration: 200, start: 0.95 }}
			alt={$zoomedInImg.alt}
			{...$zoomedInImg}
		/>
		<button
			class="escape-button"
			aria-label="escape"
			on:click={() => ($zoomedInImg = null)}
		>
			<svg
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				height="24"
				viewBox="0 0 24 24"
				width="24"
				fill="currentColor"
				><path d="M0 0h24v24H0z" fill="none" /><path
					d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
				/></svg
			>
		</button>
	</div>
{/if}

<style>
	button {
		margin: 0;
		padding: 0;
		border: none;
		background: none;
	}
	.zoomed-in-wrapper {
		background-color: rgb(0 0 0 / 0.6);
		backdrop-filter: blur(6px);
		display: grid;
		place-items: center;
		padding: 4rem 2rem;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.zoomed-in-wrapper .escape-button-bg {
		cursor: zoom-out;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
	}
	.zoomed-in-wrapper .escape-button {
		cursor: pointer;
		position: absolute;
		top: 1rem;
		right: 1rem;
		width: 2rem;
		height: 2rem;
		display: grid;
		place-items: center;
	}
	.zoomed-in-wrapper img {
		background-color: black;
		position: relative;
		max-width: 100%;
		max-height: 100%;
		min-height: 0;
		width: unset;
		height: unset;
	}
</style>
