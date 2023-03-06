<script lang="ts">
	import type { PageData } from './$types';
	import type { Post } from '$lib/types';
	import Header from '../components/Header/Header.svelte';
	import { config } from '$lib/config';
	export let data: PageData & { posts: Post[] };
</script>

<div class="container mx-auto px-4 lg:px-14">
	<Header />
	<div class="my-10 grid grid-cols-6 gap-14">
		{#each data.posts as post}
			<div class="col-span-6 md:col-span-3 lg:col-span-2">
				<div class="widget rounded-[40px] p-6 text-center">
					<figure class="mb-4 overflow-hidden rounded-[40px]">
						<img
							class="h-full w-full"
							src={`${config.apiHost}${post.attributes.thumbnail.data.attributes.url}`}
							alt={post.attributes.thumbnail.data.attributes.alternativeText}
						/>
					</figure>
					<a class="hover:animate-pulse" href="/blog/{post.id}">
						<h3 class="mb-4 font-heading text-3xl font-extrabold">
							{post.attributes.title}
						</h3>
					</a>
					<div class="mb-4">
						{post.attributes.description}
					</div>
					<a
						href="/blog/{post.id}"
						class="btn-primary btn-sm btn rounded-2xl border-4 border-solid border-black"
						>Read more</a
					>
				</div>
			</div>
		{/each}
	</div>
</div>
