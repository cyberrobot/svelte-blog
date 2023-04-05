<script lang="ts">
	/**
	 * @name date - The date to be formatted
	 * @type {string}
	 * @example "2021-08-01T00:00:00.000Z"
	 */
	export let date: string;
	let _class: string = '';
	export { _class as class };
</script>

<span class={`text-gray-500 ${_class}`}>
	{new Date(date).toLocaleDateString('en-BG', { year: 'numeric', month: 'long', day: 'numeric' })}
</span>
