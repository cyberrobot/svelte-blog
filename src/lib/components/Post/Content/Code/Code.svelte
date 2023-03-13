<script lang="ts">
	import { HighlightAuto } from 'svelte-highlight';
	export let lang: string;
	export let text: string;
</script>

<div class="mb-10 max-h-[400px] overflow-auto rounded-md">
	<HighlightAuto {...lang && { language: lang }} code={text} />
</div>
