<script lang="ts">
	import '@fontsource/montserrat/600.css';
	import '@fontsource/montserrat/700.css';
	import '@fontsource/montserrat/900.css';
	import '@fontsource/work-sans/400.css';
	import '@fontsource/work-sans/900.css';
	import '../app.css';
	import '../prism.css';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import Logo from '$lib/components/Logo/Logo.svelte';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import { afterNavigate } from '$app/navigation';
	import lazyload, { type ILazyLoadInstance } from 'vanilla-lazyload';
	import { browser } from '$app/environment';

	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload({
			callback_error: (img: HTMLElement) => {
				const href = img.getAttribute('data-src');
				if (!href) return;
				const parts = href?.split('/')?.pop()?.split('_');
				if (!parts || parts.length < 2) return;
				const fileName = `${parts.slice(1, -1).join('_')}_${parts.slice(-1)}`;
				img.setAttribute('src', href.replace(parts.join('_') as string, fileName));
			}
		});
	}

	let container: HTMLElement;

	afterNavigate(() => {
		if (container) {
			container.scrollIntoView();
		}
	});
</script>

<div class="cogs-pattern drawer">
	<input id="mobile-side-nav" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<div class="container mx-auto px-4 lg:px-14" bind:this={container}>
			<Header />
			<slot />
			<Footer />
		</div>
	</div>
	<div class="drawer-side">
		<label for="mobile-side-nav" class="drawer-overlay" />
		<div class="w-[80%] bg-base-100 p-4">
			<div class="mb-4">
				<a href="/">
					<Logo />
				</a>
			</div>
			<Navbar direction="vertical" />
		</div>
	</div>
</div>

<style>
	:global(body) {
		font-family: 'Work Sans', sans-serif;
	}
	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'Montserrat', sans-serif;
	}
</style>
