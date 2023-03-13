<script>
	export let direction = 'horizontal';
</script>

<nav class={direction === 'horizontal' ? 'navbar' : ''}>
	<ul class="menu {direction === 'horizontal' ? 'menu-horizontal' : ''} -mx-4">
		<li><a href="/">Blog</a></li>
		<li><a href="/work-with-me">Work with me</a></li>
		<li><a href="/contact">Contact</a></li>
	</ul>
</nav>

<style>
	.navbar .menu li a {
		color: #000;
		text-transform: uppercase;
		font-weight: 900;
		font-size: 18px;
		@apply font-heading;
	}
	.navbar .menu li a:hover {
		background: none;
		color: #f16363;
	}
</style>
