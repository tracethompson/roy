<script>
	import { useMachine } from '@xstate/svelte';
	import { fly } from 'svelte/transition';
	export let idx, posts;
	import { interpret } from 'xstate';
	import { elevator } from './machineRoom';
	import ElevShaft from './ElevShaft.svelte';
	import TinyElevator from './TinyElevator.svelte';
	import ElevShaftFront from './ElevShaftFront.svelte';
	let car;
	let targetFloor;
	let transitionFloor = 0;
	let opening = true;
	const { state, send } = useMachine(elevator);
	let handleTransEnd = (e) => {
		if (e.target.classList.contains('opening') || e.target.classList.contains('closing')) {
			send('FINISHED');
		}
		if (e.target.classList.contains('pulling')) {
			send('ARRIVED');
			send('OPENING_START');
		}
	};
	$: {
		switch ($state.value) {
			case 'closing':
				opening = false;
				break;
			case 'opening':
				opening = true;
				break;

			case 'closed':
				send('PULL_START');
				transitionFloor = targetFloor;
				break;
			case 'pulling':
				send('PULL_START');
				transitionFloor = targetFloor;
				break;
		}
	}
	// 		$:console.log($state.value)
</script>

<div class="pos-ref" in:fly|local={{ x: 30, duration: 2000, delay: 500 }}>
	<div class="shaft-container">
		<ElevShaft />
		<div
			bind:this={car}
			on:transitionend={handleTransEnd}
			style="top:{transitionFloor}px"
			class="p {$state.value}"
		>
			<TinyElevator class_={$state.value} />
		</div>
		<div class="front-ref">
			<ElevShaftFront />
		</div>
	</div>
	<div class="machine-container">
		<div class="list-container">
			{#each posts as post, i}
				<div
					class="list-item"
					on:click={() => {
						send('NEW_FLOOR');
						idx = i;
						targetFloor = 37.5 * i;
					}}
				>
					{post.title}
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.front-ref {
		position: absolute;
		top: 0;
		right: 0;
	}
	.pos-ref {
		background: #00000055;
		border-radius: 7px;
		position: fixed;
		right: 20px;
		bottom: 10px;
		color: white;

		display: grid;
		grid-template-columns: auto auto;
		grid-template-rows: auto;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: 'HTML SVG';
		/* width: 100%;
		height: 100%; */
	}

	.shaft-container {
		grid-area: SVG;
	}

	.machine-container {
		grid-area: HTML;
	}
	.list-item {
		// margin-bottom: 14px;
		text-align: right;
		transition: transform 300ms ease;
		padding-left: 5px;
		padding-top: 7px;
		padding-bottom: 7px;
		transform: translateX(0px);
		cursor: pointer;

		&:hover {
			transform: translateX(-6px);
		}
	}
	.list-container {
		margin-top: 10px;

		font-family: 'DIN Alternate';
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		text-transform: uppercase;
		/* line-height: 9px; */
	}
	.p {
		position: absolute;
		top: 0px;
		right: 3px;
		// width: 10px;
		transition: top 2500ms cubic-bezier(0.41, 0.03, 0.18, 1);
	}

	@media (max-width: 480px) {
		.list-container {
			margin-top: 15px !important;

			font-size: 12px !important;
		}
		.list-item {
			// margin-bottom: 14px;

			padding-top: 10px !important;
			padding-bottom: 10px !important;
		}
	}
	@media (max-width: 1099px) {
		.pos-ref {
			left: 10px;
			right: unset !important; /* cant tell if this is needed only in development*/
		}
	}
</style>
