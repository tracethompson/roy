<script>
	import Icon from './Icon.svelte';

	export let pos, hover, reveal;
	// let reveal = false;
</script>

<div
	class="container"
	class:hover
	class:reveal
	sveltekit:prefetch
	style="top:{pos.y}px; left:{pos.x}px;"
	on:mouseenter={() => (hover = true)}
	on:mouseleave={() => {
		hover = false;
	}}
	on:click={() => {
		hover = true;
		reveal = !reveal;
	}}
>
	<Icon icon="phone" />
	<div class="drawer" class:reveal>contact</div>
	<div class="contact" class:reveal>
		management
		<br />
		MGMT@ROYBLAIR.COM
		<br /> <br />
		BOOKING
		<br />
		LANDERSON@PARADIGMAGENCY.COM
	</div>
</div>

<style lang="scss">
	.container {
		position: absolute;
		left: 1000px;
		width: max-content;
		padding: 20px;
		color: white;
		cursor: pointer;
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
			background-color: #ffffff00;
			transition: width 350ms ease, background-color 120ms ease;
			text-align: center;
			vertical-align: center;
			line-height: 38px;
			font-weight: 700;
			text-indent: 5px;
		}

		.contact {
			box-sizing: border-box;
			position: relative;
			top: -10px;
			overflow: hidden;
			width: 0;
			font-size: 18px;
			line-height: 22px;
			height: 0px;
			border-radius: 0 0 5px 5px;
			border: white 4px solid;
			border-top: none;
			text-transform: uppercase;
		}
		&:hover {
			.drawer {
				width: 164px;
				transition: width 1s ease;
			}
		}
		&.hover {
			.drawer {
				width: 164px;
				transition: width 1s ease;
			}
		}
		&.reveal {
			.contact {
				transition: height 350ms ease 350ms, padding 50ms ease 350ms, width 0ms ease 350ms;
				width: 417px;
				height: 132px;
				padding: 8px;
			}
			.drawer {
				transition: all 350ms ease;
				width: 378px;
				background-color: #ffffffff;
				color: #9b9b9b;
			}
		}
	}
</style>
