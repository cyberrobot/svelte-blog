<script lang="ts">
	// @ts-ignore
	import readingTime from 'reading-time/lib/reading-time';
	/**
	 * @name content - The content to be evaluated
	 * @type {string}
	 */
	export let content: string;
	const { text } = readingTime(content);
</script>

<span class="text-gray-500">
	{text}
</span>
