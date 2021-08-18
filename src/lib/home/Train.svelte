<script>
	import { onMount } from 'svelte';

	import { fly } from 'svelte/transition';
	let enter = false;
	onMount(() => {
		enter = true;
	});
	let dist = 1000;
	let angle = 30 * 0.0174533;
</script>

{#if enter}
	<g
		in:fly={{ x: Math.cos(angle) * dist, y: -1 * Math.sin(angle) * dist, duration: 6000 }}
		width="2379"
		height="1375"
		viewBox="0 0 2379 1375"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M721.614 480.876L926.6 362.527L926.6 424.527L705.744 552.038C703.864 552.525 702.295 551.933 701.433 550.413L701.433 534.027L701.433 516.083L702.606 509.401C704.609 497.982 712.504 486.136 721.614 480.876Z"
			fill="#9B9B9B"
			stroke="white"
		/>
		<path
			d="M935.261 357.527L1186.41 212.527L1186.41 274.527L935.261 419.527L935.261 357.527Z"
			fill="#9B9B9B"
			stroke="white"
		/>
		<rect
			x="0.433013"
			y="0.25"
			width="52"
			height="22"
			transform="matrix(0.866025 -0.5 2.20305e-08 1 805.847 445.994)"
			stroke="white"
		/>
		<rect
			x="0.433013"
			y="0.25"
			width="52"
			height="22"
			transform="matrix(0.866025 -0.5 2.20305e-08 1 754.753 475.494)"
			stroke="white"
		/>
		<rect
			x="0.433013"
			y="0.25"
			width="52"
			height="22"
			transform="matrix(0.866025 -0.5 2.20305e-08 1 1020.62 321.994)"
			fill="#9B9B9B"
			stroke="white"
		/>
		<rect
			x="0.433013"
			y="0.25"
			width="52"
			height="22"
			transform="matrix(0.866025 -0.5 2.20305e-08 1 1130.6 258.494)"
			stroke="white"
		/>
		<rect
			width="19"
			height="46"
			transform="matrix(0.866025 -0.5 2.20305e-08 1 874.203 406.277)"
			fill="white"
		/>
		<rect
			width="19"
			height="46"
			transform="matrix(0.866025 -0.5 2.20305e-08 1 1086.38 283.777)"
			fill="white"
		/>
		<rect
			width="19"
			height="46"
			transform="matrix(0.866025 -0.5 2.20305e-08 1 891.527 396.277)"
			fill="white"
		/>
		<rect
			width="19"
			height="46"
			transform="matrix(0.866025 -0.5 2.20305e-08 1 1103.7 273.777)"
			fill="white"
		/>
		<rect
			x="0.433013"
			y="0.25"
			width="52"
			height="22"
			transform="matrix(0.866025 -0.5 2.20305e-08 1 955.671 359.494)"
			fill="#9B9B9B"
			stroke="white"
		/>
		<path
			d="M723.085 494.027L739.54 484.527L739.54 507.527L723.085 517.027L723.085 494.027Z"
			fill="#9B9B9B"
			stroke="white"
		/>
		<path
			d="M1195.93 207.027L1439.29 66.5273L1439.29 128.527L1195.93 269.027L1195.93 207.027Z"
			fill="#9B9B9B"
			stroke="white"
		/>
		<rect
			x="0.433013"
			y="0.25"
			width="51.5184"
			height="22"
			transform="matrix(0.866025 -0.5 2.20305e-08 1 1270.02 178.007)"
			stroke="white"
		/>
		<rect
			x="0.433013"
			y="0.25"
			width="51.5184"
			height="22"
			transform="matrix(0.866025 -0.5 2.20305e-08 1 1379 115.083)"
			stroke="white"
		/>
		<rect
			width="18.8273"
			height="46"
			transform="matrix(0.866025 -0.5 2.20305e-08 1 1335.18 140.135)"
			fill="white"
		/>
		<rect
			width="18.8274"
			height="46"
			transform="matrix(0.866025 -0.5 2.20305e-08 1 1352.34 130.226)"
			fill="white"
		/>
		<rect
			x="0.433013"
			y="0.25"
			width="51.5184"
			height="22"
			transform="matrix(0.866025 -0.5 2.20305e-08 1 1205.66 215.166)"
			stroke="white"
		/>
	</g>
{/if}
