<script>
	import '../app.css';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import Logo from '$lib/components/Logo/Logo.svelte';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
</script>

<div class="drawer">
	<input id="mobile-side-nav" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<div class="container mx-auto px-4 lg:px-14">
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
