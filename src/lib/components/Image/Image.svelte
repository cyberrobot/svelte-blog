<script lang="ts">
	export let alt: string;
	export let height: number; // needed to reduce CLS
	export let src: string;
	export let sources: { srcset: string; type: string; size: string }[];
	export let width: number; // needed to reduce CLS
	export let placeholder: string =
		"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 14'%3E%3C/svg%3E";
	export let maxWidth: string = '1280px';
	export let loading: 'lazy' | 'eager' = 'lazy';
	export let style: string = '';
</script>

<picture>
	{#each sources as source}
		<source media={source.size} data-srcset={source.srcset} type={source.type} {width} {height} />
	{/each}
	<img
		class="lazy"
		{alt}
		{loading}
		decoding="async"
		{width}
		{height}
		src={placeholder}
		data-src={src}
		style={`max-width:${maxWidth};${style}`}
	/>
</picture>

<style>
	img {
		height: auto;
	}

	img:not([src]):not([srcset]) {
		visibility: hidden;
	}
</style>
