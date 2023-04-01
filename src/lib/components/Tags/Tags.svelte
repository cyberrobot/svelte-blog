<script lang="ts">
	export let tags: string[];
</script>

{#if tags}
	<div class="flex flex-wrap">
		{#each tags as tag}
			<span class="mr-1 rounded-full bg-black px-3 py-1 text-sm text-white">
				{tag}
			</span>
		{/each}
	</div>
{/if}
