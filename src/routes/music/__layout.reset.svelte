<script context="module">
	export async function load({ page, fetch, session, context }) {
		const r = await fetch(`/music.json`);
		const albums = await r.json();
		return {
			props: {
				albums: albums
			}
		};
	}
</script>

<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	import HomeButton from '$lib/HomeButton.svelte';
	export let albums;
	$: segment = $page.params.slug;

	let albumDisplay = albums;

	let idx = writable(0);
	setContext('idx', idx);
	$: {
		if (segment) {
			albumDisplay = albums.filter((album) => album.slug === segment);
		} else {
			albumDisplay = albums;
		}
	}

	let formatter = new Intl.DateTimeFormat('en-us', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
</script>

<svelte:head>
	<style>
		:root {
			background: #112c89;
		}
	</style>
</svelte:head>
<HomeButton>music</HomeButton>
<nav class="container">
	<a class="home" href={'/music'} sveltekit:prefetch><img src="/music_menu.png" /></a>

	{#if true}
		<ul class="album-ul">
			{#each albumDisplay as album}
				<li class="album">
					<a sveltekit:prefetch href="/music/{!segment ? album.slug : ''}"> {album.title}</a>
					{#if !segment}
						<div class="info">
							{formatter.format(new Date(Date.parse(albums[0].release)))}
							({album.runtime})
						</div>
					{/if}
					{#if segment}
						<ul class="songs-ul">
							{#each album.song as song, i}
								<li class="songs">
									<a
										sveltekit:prefetch
										href="/music/{album.slug}"
										on:click={() => {
											$idx = i;
										}}>{song.title}</a
									>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>
	{/if}
</nav>
<slot />

<style lang="scss">
	.container {
		font-family: 'DIN Alternate';
		position: relative;
		left: 10px;
		top: 10px;
	}
	.info {
		font-weight: 100;
		font-style: italic;

		font-size: 15px;
		text-transform: none;
		display: inline-block;
	}
	a {
		text-decoration: none;
	}

	.album {
		color: white;
		font-size: 36px;
		text-transform: uppercase;
	}
	.songs {
		font-weight: 100;
		font-size: 24px;
		text-align: right;
	}
	nav {
		display: inline-flex;

		* {
			user-select: none;
			// transition: all 500ms ease;
		}
		&:hover {
			img {
				transform: rotateY(180deg);
				backface-visibility: visible;
			}
		}
	}
	.songs-ul:hover li {
		opacity: 0.2;
		&:hover {
			opacity: 1;

			a {
				background: none;
			}
		}
	}
	.album-ul {
		& ~ a {
			width: fit-content;
			height: fit-content;
		}
		&:hover {
			& .album {
				opacity: 0.5;
				.info {
					opacity: 0;
				}
				&:hover {
					opacity: 1;

					& > a {
						background: #0085ff;
					}
				}
			}
		}
	}
	.home {
		float: left;
		margin-right: 15px;
	}
	* {
		transition: all 500ms ease;
		transform: rotateY(0deg);
	}
	li,
	ul {
		list-style: none;
		margin-block-start: unset;
		margin-block-end: unset;
		margin-inline-start: unset;
		margin-inline-end: unset;
		padding-inline-start: unset;
		display: block;
	}
	ul {
		display: block;
	}

	@media (max-width: 425px) {
		.album {
			font-size: 24px;
		}
		.info {
			font-size: 9px;
		}
		.songs {
			font-size: 18px;
		}
	}
</style>
