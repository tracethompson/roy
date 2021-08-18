<script context="module">
	export const prerender = true;
	export async function load({ page, fetch, session, context }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await fetch(`${page.path}.json`);

		const data = await res.json();

		return {
			props: { post: data }
		};
	}
</script>

<script>
	import { fade } from 'svelte/transition';

	import { getContext } from 'svelte';

	export let post;
	let idx = getContext('idx');

	$: songs = post.song;
	$: key = $idx;
</script>

<div transition:fade|local class="container">
	<div class="top-margin">
		<h1>{songs[$idx]?.title}</h1>
		<!--
	<nav>
	  {#each songs as song, i}
		<li
		  on:click={() => {
			idx = i;
		  }}
		>
		  {song.title}
		</li>
	  {/each}
	</nav> -->
		<!-- {#if $idx >= 0} -->
		<pre>
	  {@html songs[$idx]?.lyrics}
	</pre>
		<div class="credits">{songs[$idx]?.credits}</div>
	</div>
</div>
{#if false}<slot />{/if}

<!-- {/if} -->
<style lang="scss">
	h1 {
		text-transform: uppercase;
	}
	pre,
	h1 {
		font-family: 'DIN Alternate';
		font-style: normal;
		font-weight: bold;
	}
	.top-margin {
		margin-top: 20px;
	}
	.container {
		display: grid;
		// align-content: center;
		justify-content: center;
		color: white;
		text-align: center;
	}
</style>
