<script lang="ts">
	import type { PageData } from './$types';
	import type { Tag } from '$lib/types';
	export let data: PageData;
	const { tag }: { tag: Tag } = data;
</script>

<h1 class="mb-8 font-heading text-2xl font-extrabold text-black md:text-4xl">
	Posts for {tag.attributes.name}
</h1>
<div class="mb-2">
	{#if tag.attributes.posts.data.length === 0}
		<div class="mb-4">No posts found</div>
	{/if}
	{#each tag.attributes.posts.data as post}
		<a
			class="link mb-3 block text-base hover:link-primary md:text-xl"
			href="/blog/{post.attributes.slug}"
		>
			{post.attributes.title}
		</a>
	{/each}
</div>
