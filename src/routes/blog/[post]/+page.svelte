<script lang="ts">
	import type { PageData } from './$types';
	import SvelteMarkdown from 'svelte-markdown';
	import Paragraph from '$lib/components/Post/Content/Paragraph/Paragraph.svelte';
	import Heading from '$lib/components/Post/Content/Heading/Heading.svelte';
	import List from '$lib/components/Post/Content/List/List.svelte';
	import Link from '$lib/components/Post/Content/Link/Link.svelte';
	import Aside from '$lib/components/Aside/Aside.svelte';
	import Code from '$lib/components/Post/Content/Code/Code.svelte';
	import type { Post } from '$lib/types';
	import highlightTheme from 'svelte-highlight/styles/lioshi';
	import { MetaTags, JsonLd } from 'svelte-meta-tags';
	import { config } from '$lib/config';
	export let data: PageData & { post: Post[] };
	const post: Post = data.post[0];
</script>

<svelte:head>
	{@html highlightTheme}
</svelte:head>

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
		<div class="mb-10 rounded-lg bg-base-100 p-6">{post.attributes.description}</div>
		<div class="mt-4">
			<SvelteMarkdown
				source={post.attributes.content}
				renderers={{
					paragraph: Paragraph,
					heading: Heading,
					list: List,
					link: Link,
					code: Code
				}}
			/>
		</div>
	</article>
	<Aside aboutMe={data.bio} />
</div>
