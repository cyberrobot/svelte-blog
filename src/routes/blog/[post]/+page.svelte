<script lang="ts">
	import Header from '../../../components/Header/Header.svelte';
	import type { PageData } from './$types';
	import SvelteMarkdown from 'svelte-markdown';
	import Paragraph from '../../../components/Post/Content/Paragraph/Paragraph.svelte';
	import Heading from '../../../components/Post/Content/Heading/Heading.svelte';
	import List from '../../../components/Post/Content/List/List.svelte';
	import Link from '../../../components/Post/Content/Link/Link.svelte';
	import Aside from '../../../components/Aside/Aside.svelte';
	import Code from '../../../components/Post/Content/Code/Code.svelte';
	import type { Post } from '$lib/types';
	import highlightTheme from 'svelte-highlight/styles/lioshi';
	export let data: PageData & { post: Post };
</script>

<svelte:head>
	{@html highlightTheme}
</svelte:head>

<div class="container mx-auto px-4 lg:px-14">
	<Header />
	<div class="mb-10 grid grid-cols-6 gap-16">
		<div class="post-content widget col-span-6 rounded-[40px] p-10 lg:col-span-4">
			<h1 class="mb-10 text-center font-heading text-2xl font-extrabold text-black md:text-4xl">
				{data.post.attributes.title}
			</h1>
			<div class="mb-10 rounded-lg bg-base-100 p-6">{data.post.attributes.description}</div>
			<div class="mt-4">
				<SvelteMarkdown
					source={data.post.attributes.content}
					renderers={{
						paragraph: Paragraph,
						heading: Heading,
						list: List,
						link: Link,
						code: Code
					}}
				/>
			</div>
		</div>
		<Aside aboutMe={data.bio} />
	</div>
</div>
