<script lang="ts">
	import type { Tag } from '$lib/types';
	export let name: string;
	export let url: string;
	export let posts: Tag['attributes']['posts']['data'];
</script>

<a href={url} class="tag font-base mr-3 font-black no-underline">
	<span class="tag-hash tag-hash-hover">#</span><span class="tag-name uppercase"
		>{name}{' '}{posts ? `(${posts.length})` : ''}</span
	>
</a>

<style>
	.tag .tag-hash {
		@apply text-theme-accent-1 transition-colors duration-300;
	}

	.tag .tag-name {
		@apply text-black transition-colors duration-300;
	}

	.tag:hover .tag-hash {
		@apply text-black;
	}

	.tag:hover .tag-name {
		@apply text-theme-accent-1;
	}
</style>
