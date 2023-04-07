<script lang="ts">
	import Tag from '$lib/components/Tag/Tag.svelte';
	import type { Tags } from '$lib/types';
	import { MetaTags } from 'svelte-meta-tags';
	import type { PageData } from './$types';
	export let data: PageData;
	const { tags }: { tags: Tags['data'] } = data;
</script>

<MetaTags title="Posts by tag - Yaroslav Salmin" />

<h1 class="mb-8 font-heading text-2xl font-extrabold text-black md:text-4xl">Posts by Tag</h1>

{#if tags}
	<div class="flex flex-wrap">
		{#each tags as tag}
			<Tag
				name={tag.attributes.name}
				url="tags/{tag.attributes.name}"
				posts={tag.attributes.posts.data}
			/>
		{/each}
	</div>
{/if}
