<script lang="ts">
	import AboutMe from '../AboutMe/AboutMe.svelte';
	import type { Bio } from '$lib/types';
	import { getIsomorphicImageSource } from '$lib/utils/images/getIsomorphicImageSource';
	export let aboutMe: Bio;
</script>

<aside class="sidebar col-span-6 lg:col-span-2">
	{#await getIsomorphicImageSource({hash: aboutMe.attributes.thumbnail.data.attributes.hash, ext: aboutMe.attributes.thumbnail.data.attributes.ext}) then src}
		<AboutMe
			thumbnail={src}
			name={aboutMe.attributes.name}
			description={aboutMe.attributes.description}
		/>
	{/await}
</aside>
