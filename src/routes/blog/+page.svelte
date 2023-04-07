<script lang="ts">
	import type { PageData } from './$types';
	import type { Post } from '$lib/types';
	import PublishedDate from '$lib/components/PublishedDate/PublishedDate.svelte';
	import TimeToRead from '$lib/components/TimeToRead/TimeToRead.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	export let data: PageData & { posts: Post[] };
</script>

<MetaTags title="Batdog Codes blog about web technology - Yaroslav Salmin" />

<div class="mb-2 grid grid-cols-6 gap-14">
	{#each data.posts as post}
		<div class="col-span-6 md:col-span-3 lg:col-span-2">
			<div class="widget rounded-[40px]">
				<div class="polka-dots-pattern mb-4 rounded-t-[36px] bg-theme-accent-3 p-6">
					<div class="logo mb-3 h-[26px] w-[140px]" />
					<a href="/blog/{post.attributes.slug}" class="hover:animate-pulse">
						<h3 class="font-heading text-2xl font-bold text-white md:text-2xl">
							{post.attributes.title}
						</h3>
					</a>
					<div class="mt-2">
						<PublishedDate class="text-white" date={post.attributes.publishedAt} />
						<span class="text-white">•</span>
						<TimeToRead class="text-white" content={post.attributes.content} />
					</div>
				</div>
				<div class="mb-4 px-6 text-lg">
					{post.attributes.description}
				</div>
				<div class="mb-6 px-6 text-center">
					<a href="/blog/{post.attributes.slug}" class="btn-primary btn-sm btn">Read more</a>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.logo {
		background: url('/images/logo.svg') no-repeat;
	}
</style>
