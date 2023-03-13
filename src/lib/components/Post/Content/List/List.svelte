<script lang="ts">
	export let ordered: boolean;
	export let start: number;
</script>

{#if ordered}
	<ol {start} class="m-8 font-body text-lg leading-7 text-black"><slot /></ol>
{:else}
	<ul class="m-8 font-body text-lg leading-7 text-black"><slot /></ul>
{/if}

<style>
	ol {
		list-style: decimal;
	}
	ul {
		list-style: disc;
	}
</style>
