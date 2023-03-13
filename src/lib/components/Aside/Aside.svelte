<script lang="ts">
	import AboutMe from '../AboutMe/AboutMe.svelte';
	import type { Bio } from '$lib/types';
	import { config } from '$lib/config';
	export let aboutMe: Bio;
	const thumbnailWithHost = config.apiHost + aboutMe.attributes.thumbnail.data.attributes.url;
</script>

<aside class="sidebar col-span-6 lg:col-span-2">
	<AboutMe
		thumbnail={thumbnailWithHost}
		name={aboutMe.attributes.name}
		description={aboutMe.attributes.description}
	/>
</aside>
