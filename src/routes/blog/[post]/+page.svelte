<script lang="ts">
	import type { PageData } from './$types';
	import Aside from '$lib/components/Aside/Aside.svelte';
	import type { Post } from '$lib/types';
	import { escapeHtml } from '$lib/utils/escapeHtml/escapeHtml';
	import { MetaTags, JsonLd } from 'svelte-meta-tags';
	import { config } from '$lib/config';
	export let data: PageData;
	$:post = data.post as Post;
</script>

<MetaTags title={post.attributes.title} description={post.attributes.description} />

<JsonLd
	schema={{
		'@type': 'Article',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `${config.clientHost}/blog/${post.attributes.slug}`
		},
		image: [`${config.apiHost}${post.attributes.thumbnail.data.attributes.url}`],
		headline: post.attributes.title,
		description: post.attributes.description,
		datePublished: post.attributes.publishedAt,
		dateModified: post.attributes.updatedAt,
		author: {
			'@type': 'Person',
			name: data.bio.attributes.name
		}
	}}
/>

<div class="mb-2 grid grid-cols-6 gap-16">
	<article class="post-content widget col-span-6 rounded-[40px] p-10 lg:col-span-4">
		<h1 class="mb-10 text-center font-heading text-2xl font-extrabold text-black md:text-4xl">
			{post.attributes.title}
		</h1>
		<div class="mb-10 text-lg rounded-lg bg-base-100 p-6 max-w-[65ch] mx-auto">{post.attributes.description}</div>
		<div class="all-prose mx-auto mt-4">
			{@html escapeHtml(post.attributes.content)}
		</div>
	</article>
	<Aside aboutMe={data.bio} />
</div>
