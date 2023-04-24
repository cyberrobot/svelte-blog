<script lang="ts">
	import { onMount } from 'svelte';

	export let alt: string;
	export let width: number; // needed to reduce CLS
	export let height: number; // needed to reduce CLS
	export let src: string;
	export let maxWidth: string = '1280px';
	export let loading: 'lazy' | 'eager' = 'lazy';
	export let style: string = '';

	let ref: HTMLImageElement;

	onMount(() => {
		if (!ref) return;
		ref.onload = () => {
			width = ref.offsetWidth;
			height = ref.offsetHeight;
		};
	});
</script>

<img
	class="lazy"
	{alt}
	{loading}
	decoding="async"
	{width}
	{height}
	data-src={src}
	bind:this={ref}
	style={`max-width:${maxWidth};${style}`}
/>

<style>
	img {
		height: auto;
	}

	img:not([src]):not([srcset]) {
		visibility: hidden;
	}
</style>
