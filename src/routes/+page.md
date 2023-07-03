---
title: MangoMC
hasRibbon: true
---

<script>
	import Gallery from 'svelte-gallery'
	import ImgWrapper from '$lib/ImgWrapper.svelte'

	const images = [
		{ src: '/images/srv_spawn.png', width: 1920, height: 1080 },
		{ src: '/images/srv_ducks_zoom.png', width: 1920, height: 1080 },
		{ src: '/images/srv_shop.png', width: 1920, height: 1080 },
		{ src: '/images/srv_sudohouse.png', width: 1920, height: 1080 },
		{ src: '/images/ledges.jpg', width: 1920, height: 1080 },
		{ src: '/images/elytra.png', width: 1920, height: 1080 }
	]
</script>

<Gallery imageComponent={ImgWrapper} {images} />

<br>

MangoMC is a new Minecraft server focused on our community. We currently
host a Survival SMP and [Creative plotworld](/creative), and are in the process of
adding more [minigames](/minigames).
