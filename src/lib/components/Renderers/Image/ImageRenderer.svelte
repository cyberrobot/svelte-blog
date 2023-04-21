<script lang="ts">
	import Image from '$lib/components/Image/Image.svelte';

	export let href: string = '';
	export let text: string = '';

	const filename = href.split('/').pop();
	const name = filename?.split('.').shift();
	const type = href.split('.').pop();

	const sources = [
		{
			srcset: href.replace(`${name}.${type}`, `${name}.${type}`),
			type: `image/${type}`,
			size: '(min-width: 1024px)'
		},
		{
			srcset: href.replace(`${name}.${type}`, `large_${name}.${type}`),
			type: `image/${type}`,
			size: '(min-width: 768px)'
		}
	];
</script>

<Image
	alt={text}
	height={640}
	width={640}
	src={href.replace(`${name}.${type}`, `medium_${name}.${type}`)}
	{sources}
	style="width:100%"
/>
