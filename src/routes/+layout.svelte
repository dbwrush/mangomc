<script>
	import '../app.postcss'
	import ImgZoomin from '$lib/ImgZoomin.svelte'
	import Status from '$lib/Status.svelte'
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'

	const zoomedInImg = writable(null)
	setContext('zoomedInImg', zoomedInImg)
</script>

<div class="layout">
	<div class="main-layout">
		<div class="header-wrapper">
			<header>
				<div class="header-content">
					<a href="/" class="wordmark">MangoMC</a>
					<nav>
						<a href="/survival">Survival SMP</a>
						<a href="/creative">Creative Plots</a>
						<a href="/minigames">Minigames</a>
					</nav>
					<a
						class="discord-invite"
						href="https://discord.com/invite/AYctqMETWg"
					>
						Join the Discord
					</a>
				</div>
			</header>
			<div class="header-server-status">
				<Status />
			</div>
		</div>

		<main>
			<slot />
		</main>
	</div>

	<footer>
		<div class="footer-section footer-logo-section">
			<img src="/logo.png" alt="" aria-hidden="true" />
		</div>
		<div class="footer-section">
			<p class="footer-section-title">MangoMC</p>
			<div class="footer-section-links">
				<a href="/survival">Survival SMP</a>
				<a href="/creative">Creative Plots</a>
				<a href="/minigames">Minigames</a>
				<a href="https://discord.com/invite/AYctqMETWg">Join the Discord</a>
			</div>
		</div>
	</footer>
</div>

<ImgZoomin />

<style lang="postcss">
	.main-layout {
		min-height: 100vh;
	}
	.header-wrapper {
		isolation: isolate;
	}
	.header-server-status {
		width: 100%;
		display: grid;
		place-items: center;
		z-index: 1;
		position: relative;
		top: -2.5rem;
	}
	.header-server-status :global(.server-info) {
		border: 2px solid #120d09;
		border-radius: 4px;
		background-image: linear-gradient(rgb(0 0 0 / 0.9), rgb(0 0 0 / 0.9)),
			url(/textures/dirt.png);
	}
	header {
		min-height: 20rem;
		isolation: isolate;
		position: relative;
		display: grid;
		overflow: hidden;
		padding-bottom: 2rem;
		border-bottom: 2px solid #120d09;
	}
	header::after {
		z-index: -1;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		position: absolute;
		content: '';
		background-position: center;
		background-image: url(/images/lobby-mango.webp);
		-webkit-mask-image: linear-gradient(
			-45deg,
			rgb(0 0 0 / 0.1),
			rgb(0 0 0 / 0.2)
		);
		mask-image: linear-gradient(-45deg, rgb(0 0 0 / 0.1), rgb(0 0 0 / 0.2));
		filter: blur(6px);
		transform: scale(1.2);
	}
	.header-content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		justify-content: center;
	}
	header .wordmark {
		color: inherit;
		text-decoration: none;
		font-size: 2.5rem;
		font-weight: 800;
	}
	.discord-invite {
		user-select: none;
		text-decoration: none;
		color: white;
		font-weight: 700;
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		background: #5865f2;
		transform: scale(1);
		transition: transform 100ms cubic-bezier(0.075, 0.82, 0.165, 1);
	}
	.discord-invite:hover {
		transform: scale(1.05);
	}
	nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
	}
	nav a {
		user-select: none;
		text-decoration: none;
		color: #fff;
		font-weight: 700;
		background-color: rgb(155 73 60);
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		transition: background-color 100ms;
		text-align: center;
	}
	nav a:hover {
		background-color: rgb(199 120 108);
	}

	footer {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		margin-top: 2rem;
		background-color: black;
	}
	.footer-section {
		max-width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.footer-logo-section {
		min-width: 5rem;
		user-select: none;
		justify-content: center;
	}
	.footer-logo-section img {
		width: 64px;
	}
	@media screen and (min-width: 900px) {
		footer {
			flex-direction: row;
			padding: 1rem 4rem;
		}
		.footer-section {
			min-width: 10rem;
		}
	}
	.footer-section-title {
		margin: 0;
		font-size: 1.5rem;
		font-weight: 600;
	}
	.footer-section-links {
		color: rgb(255 255 255 / 0.6);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.footer-section-links a {
		text-decoration: none;
		color: inherit;
	}
</style>
