<script lang="ts">
	export let href = '';
	export let title: string | undefined = undefined;
</script>

<a class="link-primary link" target="_blank" rel="noreferrer noopener" {href} {title}><slot /></a>
