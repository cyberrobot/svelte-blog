<script lang="ts">
	import type { PageData } from './$types';
	import type { Post } from '$lib/types';
	import { getIsomorphicImageSource } from '$lib/utils/images/getIsomorphicImageSource';
	export let data: PageData & { posts: Post[] };
</script>

<div class="mb-2 grid grid-cols-6 gap-14">
	{#each data.posts as post}
		<div class="col-span-6 md:col-span-3 lg:col-span-2">
			<div class="widget rounded-[40px] p-6 text-center">
				<a href="/blog/{post.attributes.slug}">
					<figure class="mb-4 overflow-hidden rounded-[40px]">
						{#await getIsomorphicImageSource({hash: post.attributes.thumbnail.data.attributes.hash, ext: post.attributes.thumbnail.data.attributes.ext}) then src}
							<img
								class="h-full w-full"
								src={src}
								alt={post.attributes.thumbnail.data.attributes.alternativeText}
							/>
						{/await}
					</figure>
				</a>
				<a class="hover:animate-pulse" href="/blog/{post.attributes.slug}">
					<h3 class="mb-4 font-heading text-2xl font-extrabold md:text-3xl">
						{post.attributes.title}
					</h3>
				</a>
				<div class="mb-4 text-lg">
					{post.attributes.description}
				</div>
				<a href="/blog/{post.attributes.slug}" class="btn-primary btn-sm btn">Read more</a>
			</div>
		</div>
	{/each}
</div>
