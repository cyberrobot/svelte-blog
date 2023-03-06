<script>
	import Logo from '../Logo/Logo.svelte';
	import Navbar from '../Navbar/Navbar.svelte';
</script>

<div class="mb-0 flex flex-col items-center justify-between py-6 md:py-8 lg:mb-10 lg:flex-row">
	<a class="mb-6 flex-1 lg:mb-0" href="/">
		<Logo />
	</a>
	<div class="flex-2">
		<Navbar />
	</div>
</div>
