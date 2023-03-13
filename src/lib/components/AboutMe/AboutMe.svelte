<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import Paragraph from '../Post/Content/Paragraph/Paragraph.svelte';
	export let thumbnail: string;
	export let name: string;
	export let description: string = '';
	export let content: string = '';
</script>

<div class="about-me widget rounded-[40px] px-10 pb-10 text-center">
	<div
		class="mx-10 mb-8 h-10 rounded-b-3xl bg-black  font-heading text-sm uppercase leading-10 text-white"
	>
		About me
	</div>
	<div
		class="thumbnail mx-auto mb-8 max-w-[240px] overflow-hidden rounded-full border-4 border-black"
	>
		<img src={thumbnail} alt="thumbnail" class="h-full w-full" />
	</div>
	<div class="name mb-6 font-heading text-2xl font-black text-black">{name}</div>
	<div>
		{#if description}
			{description}
		{/if}
		{#if content}
			<div>
				<SvelteMarkdown
					source={content}
					renderers={{
						paragraph: Paragraph
					}}
				/>
			</div>
		{/if}
	</div>
</div>
