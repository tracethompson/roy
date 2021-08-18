<script>
	import Icon from './Icon.svelte';

	import MailerLiteEmbed from './MailerLiteEmbed.svelte';
	import Map from './Map.svelte';
	export let pos;
	export let hover, reveal;
	let form;
	let value;
	let success = false;
	let input;
	function focus(node) {
		// the node has been mounted in the DOM
		node.focus();
		return {
			destroy() {
				// the node has been removed from the DOM
			}
		};
	}
</script>

<MailerLiteEmbed bind:value bind:form />

<!-- <input type="email" name="fields[email]" autocomplete="email" bind:value /> -->

<div
	class="container"
	class:hover
	class:value
	sveltekit:prefetch
	style="top:{pos.y}px; left:{pos.x}px;"
	on:mouseenter={() => (hover = true)}
	on:mouseleave={() => {
		hover = value ? true : false;
		if (!value && input !== document.activeElement) {
			// input !== document.activeElement
			success = false;
			reveal = false;
		}
	}}
	on:click={() => {
		hover = true;
		reveal = !reveal;
	}}
>
	<Icon icon="mail" />
	<div class="drawer">
		{#if !reveal}
			Subscribe
		{:else}
			<input
				use:focus
				on:click|stopPropagation
				type="email"
				name="fields[email]"
				placeholder="Enter Email"
				bind:value
				bind:this={input}
			/>
		{/if}
	</div>
	<button
		on:click|stopPropagation={() => {
			form.click();
			success = true; //I'm sorry
			setTimeout(() => {
				value = '';
			}, 3000);
		}}
	>
		{#if success}
			thanks!
		{:else}
			subscribe
		{/if}</button
	>
</div>

<style style="scss">
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
	button {
		border: none;
		margin: 0;
		padding: 0;
		width: auto;
		overflow: visible;

		background: white;

		text-transform: uppercase;
		font-family: 'Helvetica Neue';
		position: relative;
		top: -15px;
		left: -19px;
		box-sizing: border-box;
		border: white 4px solid;
		border-radius: 0 5px 5px 0;
		height: 45px;
		width: 0px;
		overflow: hidden;
		font-size: 18px;
		display: inline-block;
		color: #9b9b9b;
		transition: width 350ms ease;
		text-align: center;
		vertical-align: center;
		line-height: 38px;
		font-weight: 700;
		text-indent: 5px;
		cursor: pointer;
	}
	.container:hover .drawer,
	.container.hover .drawer {
		width: 184px;
		transition: width 1s ease;
	}

	.container.hover.value button {
		width: 130px !important;
		transition: width 1s ease;
	}
	.container {
		position: absolute;
		left: 1000px;
		width: max-content;
		padding: 20px;
		cursor: pointer;
	}
	input {
		font-size: 28px;
		text-align: center;
		width: 100%;
		height: 100%;
	}
</style>
