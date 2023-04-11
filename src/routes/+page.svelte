<script>
	import { getYearsFromDate } from '$lib/utils/dates/getYearsFromDate';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	title="Welcome to my place! - Yaroslav Salmin"
	description="My blog about development, testing and deploying web applications."
/>

<div class="bt-hero mb-8 flex items-center justify-center py-0">
	<div class="flex w-[100%] flex-col items-center gap-10 lg:flex-row-reverse">
		<div class="relative lg:w-[42%]">
			<img
				src="/images/avatar.png"
				alt="avatar"
				class="mx-auto max-w-[220px] md:max-w-sm xl:max-w-md 2xl:max-w-xl"
			/>
			<div
				class="widget absolute bottom-0 right-0 flex w-40 items-center justify-center gap-1.5 rounded-full py-2 font-bold uppercase md:w-52"
			>
				<span class="text-3xl md:text-4xl">{getYearsFromDate(new Date('2012-08-01'))}</span>
				<span class="text-3xl text-theme-accent-1 md:text-4xl">+</span>
				<div class="text-xs leading-3 md:text-sm md:leading-3">
					<div>years of</div>
					<div class="text-theme-accent-1">experience</div>
				</div>
			</div>
		</div>
		<div class="lg:w-[58%]">
			<div class="font-heading text-xl font-bold uppercase lg:text-3xl">
				<span>Hello,</span>{' '}<span class="text-white">my name is</span>
			</div>
			<h1 class="flex flex-col font-heading font-bold">
				<span class="text-5xl uppercase md:text-7xl xl:text-8xl 2xl:text-[110px]">Yaroslav</span>
				<span class="text-4xl text-white lg:text-6xl">salmin</span>
			</h1>
			<p class="py-8 text-xl lg:max-w-[680px] lg:py-16 lg:leading-10">
				I have bit-buckets of experience developing, testing, documenting and deploying data-rich,
				visualisation and e-commerce platforms.
			</p>
			<a class="btn-primary btn lg:btn-lg" href="/cv-yaroslav-salmin.pdf" target="_blank"
				>Download CV</a
			>
		</div>
	</div>
</div>

<style>
	@media screen and (min-width: 1024px) {
		.bt-hero {
			height: calc(100vh - 272px);
		}
	}
</style>
