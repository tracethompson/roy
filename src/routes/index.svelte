<script>
	import InteractiveMap from '$lib/home/InteractiveMap.svelte';
</script>

<svelte:head>
	<title>Blog</title>
	<style>
		body {
			background: #9b9b9b;
		}
	</style>
</svelte:head>
<!-- {#if !$preloading} -->
<!-- <svg viewBox="{vbCoor.x} {vbCoor.y}  4000 2000" width="2000" height="1000"> -->
<div class="container">
	<InteractiveMap />
</div>

<!-- {/if} -->
<!--    HTML interaction layer -->

<!-- <Button icon="video" href="http://example.com">shop</Button> -->
<style lang="scss">
</style>
