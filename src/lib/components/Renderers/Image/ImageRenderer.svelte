<script lang="ts">
	import Image from '$lib/components/Image/Image.svelte';

	export let href: string = '';
	export let text: string = '';
</script>

<Image alt={text} height={320} width={640} src={href} style="width:100%" />
