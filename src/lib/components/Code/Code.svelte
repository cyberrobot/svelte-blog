<script lang="ts">
	import { onMount, afterUpdate, tick } from 'svelte';
	import Prism from 'prismjs';
	import 'prismjs/components/prism-bash';
	import 'prismjs/components/prism-typescript';
	import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
	import 'prism-svelte';
	export let lang: string;
	export let text: string;

	onMount(() => {
		Prism.plugins.NormalizeWhitespace.setDefaults({
			'remove-trailing': true,
			'remove-indent': true,
			'left-trim': true,
			'right-trim': true
		});
	});

	afterUpdate(async () => {
		await tick();
		Prism.highlightAll();
	});
</script>

<pre>
  <code class="language-{lang}">
    {text}
  </code>
</pre>
