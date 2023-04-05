<script lang="ts">
	// @ts-ignore
	import readingTime from 'reading-time/lib/reading-time';
	/**
	 * @name content - The content to be evaluated
	 * @type {string}
	 */
	export let content: string;
	let _class: string = '';
	export { _class as class };
	const { text } = readingTime(content);
</script>

<span class={`text-gray-500 ${_class}`}>
	{text}
</span>
