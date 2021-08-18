<script>
	import { goto, prefetch } from '$app/navigation';
	import BoxSVG from './BoxSVG.svelte';
	export let x, y, href, hover, reveal, color;
</script>

<svg
	{x}
	{y}
	class:hover
	on:mouseenter={() => {
		hover = true;
		prefetch(href);
	}}
	on:mouseleave={() => (hover = false)}
	on:click={() => (reveal = !reveal)}
>
	<a
		{href}
		on:click={() => {
			// goto(href);
		}}
	>
		<BoxSVG {color} />
	</a>
</svg>

<style>
	svg {
		transition: opacity 200ms ease;
		opacity: 1;
	}
	svg:hover,
	svg.hover {
		opacity: 0.7;
		cursor: pointer;
	}
</style>
