<script lang="ts">
	export let depth: number;
	export let raw: string;
</script>

{#if depth === 1}
	<h1 class="mb-6 font-heading text-3xl font-medium text-black"><slot /></h1>
{:else if depth === 2}
	<h2 class="mb-6 font-heading text-3xl font-medium text-black"><slot /></h2>
{:else if depth === 3}
	<h3 class="text-md mb-6 font-heading font-medium text-black"><slot /></h3>
{:else if depth === 4}
	<h4 class="mb-6 font-heading text-sm font-medium text-black"><slot /></h4>
{:else if depth === 5}
	<h5 class="mb-6 font-heading text-xs font-medium text-black"><slot /></h5>
{:else if depth === 6}
	<h6 class="mb-6 font-heading text-xs font-medium text-black"><slot /></h6>
{:else}
	{raw}
{/if}
