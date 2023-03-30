<script lang="ts">
	/**
	 * @name date - The date to be formatted
	 * @type {string}
	 * @example "2021-08-01T00:00:00.000Z"
	 */
	export let date: string;
</script>

<span class="text-gray-500">
	{new Date(date).toLocaleDateString('en-BG', { year: 'numeric', month: 'long', day: 'numeric' })}
</span>
