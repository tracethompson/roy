<script>
	import NoIxSVG from './NoIxSVG.svelte';
	import Map from '$lib/home/Map.svelte';
	import Box from '$lib/home/Box.svelte';
	import Button from '$lib/home/Button.svelte';
	import Subscribe from '$lib/home/Subscribe.svelte';
	import Contact from '$lib/home/Contact.svelte';
	import Elevator from '$lib/home/Elevator.svelte';

	import ScrollBooster from 'scrollbooster';
	import BackWalls from './Back Walls.svelte';

	import { onMount } from 'svelte';

	let svgEl, vpEl;
	let navElOptions = [
		{
			name: 'video',
			icon: 'video',
			href: '/video',
			selfClick: false,
			pos: { x: 1299, y: 332 },
			Box: {
				color: 'green',
				pos: { x: 1138, y: 433 }
			}
		},
		{
			name: 'blog',
			icon: 'blog',
			href: '/blog',
			pos: { x: 1800, y: 180 },
			Box: {
				color: 'green',
				pos: { x: 1661, y: 223 }
			}
		},
		{
			name: 'music',
			icon: 'music',
			href: '/music',
			pos: { x: 1410, y: 542 },
			Box: {
				color: 'green',
				pos: { x: 1448, y: 557 }
			}
		},
		// {
		// 	name: 'tour',
		// 	icon: 'tour',
		// 	href: '/music',
		// 	pos: { x: 716, y: 723 },
		// 	Box: {
		// 		color: 'pink',
		// 		pos: { x: 523, y: 598 }
		// 	}
		// },
		{
			name: 'shop',
			icon: 'shop',
			href: '/music',
			pos: { x: 1716, y: 723 },
			Box: {
				color: 'pink',
				pos: { x: 1531, y: 604 }
			}
		},
		{
			name: 'subscribe',
			// icon: "tour",
			// href: "/tour",
			pos: { x: 1159, y: 1073 },
			Box: {
				color: 'pink',
				pos: { x: 1000, y: 909 }
			}
		},
		{
			name: 'contact',
			// icon: "tour",
			// href: "/tour",
			pos: { x: 639, y: 1149 },
			Box: {
				color: 'green',
				pos: { x: 502, y: 1007 }
			}
		}
	];
	let sb;
	onMount(() => {
		sb = new ScrollBooster({
			viewport: vpEl,
			content: svgEl,
			scrollMode: 'transform'
		});

		sb.setPosition({
			x: 0,
			y: 0
		});
	});
</script>

<div class="vp-cont" bind:this={vpEl}>
	<div class="svgEl" bind:this={svgEl}>
		<div class="pos-ref">
			<svg viewBox="200 200 2000 1000" width="1000" height="800">
				<!--    No interaction layer -->
				<Map />
				<BackWalls />
				<!--    SVG interaction layer -->
				{#each navElOptions as el, i}
					{#if el.name !== 'video'}
						<Box
							x={el.Box.pos.x}
							y={el.Box.pos.y}
							color={el.Box.color}
							href={el.href}
							bind:hover={el.hover}
							bind:reveal={el.reveal}
						/>
					{:else}
						1337:{i}
						<Elevator
							bind:hover={el.hover}
							href={el.href}
							x={el.Box.pos.x}
							y={el.Box.pos.y}
							bind:selfClick={el.selfClick}
						/>
					{/if}
				{/each}

				<NoIxSVG />
			</svg>
			<div class="html-container">
				{#each navElOptions as el, i}
					{#if el.name === 'subscribe'}
						<Subscribe pos={el.pos} bind:hover={el.hover} bind:reveal={el.reveal} />
					{:else if el.name === 'contact'}
						<Contact pos={el.pos} bind:hover={el.hover} bind:reveal={el.reveal} />
					{:else if el.name === 'video'}
						<Button
							pos={el.pos}
							icon={el.icon}
							href={el.href}
							bind:hover={el.hover}
							bind:selfClick={el.selfClick}>{el.name}</Button
						>
					{:else}
						<Button pos={el.pos} icon={el.icon} href={el.href} bind:hover={el.hover}
							>{el.name}</Button
						>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.pos-ref {
		position: relative;
		display: block;
		margin: auto;
		width: 1000px;
		height: 800px;
		/* 		outline: red thin solid; */
	}
	.container {
		position: relative;
		width: 100%;
		display: grid;
		justify-content: center;
		align-content: center;
		grid-template-columns: 1fr;
		margin: 0;
		padding: 0;
		background: #9b9b9b;
	}

	.vp-cont {
		cursor: move;

		width: 100%;
		height: 100%;
		@media (min-width: 0px) {
			overflow: hidden;
		}
	}
	.svgEl {
		width: 100vw;
		height: 100vh;
	}

	.html-container {
		position: absolute;
		top: 35px;
		left: -100px;
		transform: scale(0.5);
	}
</style>
