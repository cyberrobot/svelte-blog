<script lang="ts">
	import Header from '../../../components/Header/Header.svelte';
	import type { PageData } from './$types';
	import SvelteMarkdown from 'svelte-markdown';
	import Paragraph from '../../../components/Post/Content/Paragraph/Paragraph.svelte';
	import Heading from '../../../components/Post/Content/Heading/Heading.svelte';
	import List from '../../../components/Post/Content/List/List.svelte';
	/** @type {import('./$types').PageData} */
	export let data: PageData;
</script>

<div class="container mx-auto px-4 lg:px-14">
	<Header />
	<div class="my-10 grid grid-cols-6 gap-3">
		<div class="post-content widget col-span-6 rounded-[40px] p-10 lg:col-span-4">
			<h1 class="mb-10 text-center font-heading text-4xl font-black text-black">
				{data.post.attributes.title}
			</h1>
			<div class="mt-4">
				<SvelteMarkdown
					source={data.post.attributes.content}
					renderers={{
						paragraph: Paragraph,
						heading: Heading,
						list: List
					}}
				/>
			</div>
		</div>
	</div>
</div>

<style>
</style>
