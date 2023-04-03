<script lang="ts">
	import Tag from '../Tag/Tag.svelte';
	import type { Tag as TagType } from '$lib/types';
	export let tags: TagType[];
</script>

{#if tags}
	<div class="flex flex-wrap">
		{#each tags as tag}
			<Tag
				name={tag.attributes.name}
				url="tags/{tag.attributes.name}"
				{...tag.attributes.posts && { posts: tag.attributes.posts.data }}
			/>
		{/each}
	</div>
{/if}
