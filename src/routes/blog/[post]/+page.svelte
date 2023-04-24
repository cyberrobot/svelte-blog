<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import type { PageData } from './$types';
	import Aside from '$lib/components/Aside/Aside.svelte';
	import type { Post } from '$lib/types';
	import SvelteMarkdown from 'svelte-markdown';
	import { MetaTags, JsonLd } from 'svelte-meta-tags';
	import { getIsomorphicImageSource } from '$lib/utils/images/getIsomorphicImageSource';
	import { config } from '$lib/config';
	import Code from '$lib/components/Code/Code.svelte';
	import PublishedDate from '$lib/components/PublishedDate/PublishedDate.svelte';
	import TimeToRead from '$lib/components/TimeToRead/TimeToRead.svelte';
	import Tags from '$lib/components/Tags/Tags.svelte';
	import ImageRenderer from '$lib/components/Renderers/Image/ImageRenderer.svelte';
	export let data: PageData;
	$: post = data.post as Post;

	onMount(() => {
		if (browser && document.lazyloadInstance) {
			document.lazyloadInstance.update();
		}
	});
</script>

<MetaTags title={post.attributes.title} description={post.attributes.description} />

{#await getIsomorphicImageSource( { hash: post.attributes.thumbnail.data.attributes.hash, ext: post.attributes.thumbnail.data.attributes.ext } ) then src}
	<JsonLd
		schema={{
			'@type': 'Article',
			mainEntityOfPage: {
				'@type': 'WebPage',
				'@id': `${config.clientHost}/blog/${post.attributes.slug}`
			},
			image: [src],
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
{/await}

<div class="mb-2 grid grid-cols-6 gap-16">
	<article class="post-content widget col-span-6 rounded-[40px] px-4 py-8 md:p-10 lg:col-span-4">
		<div class="all-prose mx-auto">
			<h1 class="mb-2 font-heading text-2xl font-extrabold text-black md:text-4xl">
				{post.attributes.title}
			</h1>
			<div class="mb-2">
				<PublishedDate date={post.attributes.publishedAt} />
				<span class="text-gray-500">•</span>
				<TimeToRead content={post.attributes.content} />
			</div>
			<div class="mb-4">
				<Tags tags={post.attributes.tags.data} />
			</div>
			<div class="mb-10 rounded-lg bg-base-100 p-6">
				{post.attributes.description}
			</div>
			<div class="mt-4">
				<SvelteMarkdown
					renderers={{
						code: Code,
						image: ImageRenderer
					}}
					source={post.attributes.content}
				/>
			</div>
		</div>
	</article>
	<Aside aboutMe={data.bio} />
</div>
