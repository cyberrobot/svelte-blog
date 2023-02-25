<div class="widget navbar px-20">
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/home">Home</a></li>
			<li>
				<a href="/categories">
					Categories
					<svg
						class="fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
					>
				</a>
				<ul class="widget bg-white p-4">
					<li><a href="/categories/technology">Technology</a></li>
					<li><a href="/categories/programming">Programming</a></li>
				</ul>
			</li>
			<li><a href="/work-with-me">Work with me</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</div>
</div>

<style>
	.navbar {
		background-color: #fff;
		@apply rounded-full;
		padding-top: 0;
		padding-bottom: 0;
	}

	.navbar .menu {
		height: 56px;
	}

	.navbar .menu ul {
		border-radius: 0 0 13px 13px;
	}

	.navbar .menu li a {
		color: #000;
		text-transform: uppercase;
		font-weight: 900;
		font-size: 18px;
		@layer heading;
	}

	.navbar .menu li a:hover {
		background: none;
		color: #f16363;
	}
</style>
