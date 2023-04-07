<script>
	export let direction = 'horizontal';
</script>

<nav class={direction === 'horizontal' ? 'navbar' : ''}>
	<ul class="menu {direction === 'horizontal' ? 'menu-horizontal' : ''} -mx-4">
		<li><a href="/blog">Blog</a></li>
		<li><a href="/tags">Tags</a></li>
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
		@apply text-theme-accent-1;
	}
</style>
