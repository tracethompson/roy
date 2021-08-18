<script>
	import Icon from './Icon.svelte';
	export let icon, href, pos;
	export let hover;
	export let selfClick = null;
</script>

<a
	{href}
	class="container"
	class:hover
	sveltekit:prefetch
	style="top:{pos.y}px; left:{pos.x}px;"
	on:click={(e) => {
		if (href === '/video') {
			e.preventDefault();
		}
		selfClick = true;
	}}
	on:mouseenter={() => (hover = true)}
	on:mouseenter={() => (hover = true)}
	on:mouseleave={() => (hover = false)}
	on:mouseleave={() => (hover = false)}
>
	<Icon {icon} />
	<div class="drawer">
		<slot />
	</div>
</a>

<style>
	:global(svg) {
	}
	.drawer {
		text-transform: uppercase;
		font-family: 'Helvetica Neue';
		position: relative;
		left: -10px;
		box-sizing: border-box;
		border: white 4px solid;
		border-radius: 0 5px 5px 0;
		height: 45px;
		width: 0px;
		overflow: hidden;
		font-size: 18px;
		display: inline-block;
		color: white;
		transition: width 350ms ease;
		text-align: center;
		vertical-align: center;
		line-height: 38px;
		font-weight: 700;
		text-indent: 5px;
	}
	.container:hover .drawer,
	.container.hover .drawer {
		width: 124px;
		transition: width 1s ease;
	}
	.container {
		position: absolute;
		left: 1000px;
		width: max-content;
		padding: 20px;
	}
	a {
		cursor: pointer;
		text-decoration: none;
	}
</style>
