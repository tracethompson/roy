<script context="module">
	export async function load({ page, fetch, session, context }) {
		return fetch(`/video.json`)
			.then((r) => r.json())
			.then((posts) => {
				posts.sort(function compare(a, b) {
					var dateA = new Date(a.release);
					var dateB = new Date(b.release);

					return dateA - dateB;
				});

				return {
					props: {
						posts: posts
					}
				};
			});
	}
</script>

<script>
	import { fly } from 'svelte/transition';
	import VideoNav from '$lib/video/VideoNav.svelte';
	import HomeButton from '$lib/HomeButton.svelte';

	export let posts;
	let idx = 0;
	var regexp = /([\w\d_\-]+)$/gi;
	$: ytID = posts[idx].link.match(regexp);
</script>

<svelte:head>
	<title>Blog</title>
	<style>
		:root {
			background: black;
		}
	</style>
</svelte:head>

<div class="container">
	<div class="content-container">
		<div in:fly|local={{ y: 30, duration: 4000 }} class="img">
			<!-- <a href={posts[idx].link}> -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<!-- <img src="https://i.ytimg.com/vi/{ytID[0]}/maxresdefault.jpg" /> -->
			<img src={posts[idx].image + '-/scale_crop/800x568/smart/'} />
			<!-- </a> -->
		</div>
		{#key idx}
			<div class="info">
				<div in:fly={{ y: -30, duration: 1000 }} class="info-flex">
					<div class="pos-ref">
						<svg
							width="107"
							height="89"
							viewBox="0 0 107 89"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M19.891 63.7258L19.7529 64.2063L19.891 63.7258ZM106.222 88.0132L20.029 63.2452L19.7529 64.2063L105.946 88.9743L106.222 88.0132ZM15.3242 56.998V28.7031H14.3242V56.998H15.3242ZM20.029 63.2452C17.2433 62.4447 15.3242 59.8965 15.3242 56.998H14.3242C14.3242 60.3424 16.5386 63.2827 19.7529 64.2063L20.029 63.2452Z"
								fill="white"
							/>
							<rect
								x="0.638672"
								y="0.880859"
								width="26.7974"
								height="27.3219"
								rx="6.5"
								stroke="white"
							/>
						</svg>

						<div class="num">{idx + 1}</div>

						<h1>{posts[idx].title}</h1>
						<div class="credits">{posts[idx].credits}{posts[idx].credits}</div>
					</div>
				</div>
				<!-- svelte-ignore a11y-missing-attribute -->
			</div>
		{/key}
	</div>
</div>
<div in:fly|local={{ y: 30, duration: 2000, delay: 500 }} class="delay">
	<HomeButton>video</HomeButton>
</div>
<VideoNav {posts} bind:idx />

<style>
	.delay {
		width: 102px;
		height: 102px;
		position: absolute;
		right: 10px;
		top: 10px;
	}

	.pos-ref {
		position: relative;
	}
	.num {
		position: absolute;
		font-size: 10px;
		top: -60px;
		left: -47%;
		padding: 7px 11px;
	}
	svg {
		fill: #00000044;
		position: absolute;
		top: -60px;
		left: -47%;
	}
	.content-container {
		display: flex;
		flex-wrap: wrap;
	}
	.credits {
		font-family: DIN Alternate;
		font-style: normal;
		font-weight: bold;
		font-size: 14px;
		line-height: 21px;
		min-height: 105px;
	}
	.info-flex {
		width: 250px;
		border-radius: 25px;
		border: white solid 1px;
		padding: 10px;
	}
	.info {
		position: relative;
		display: grid;
		justify-content: right;
		align-content: center;
		flex: 1 1 250px; /*  No stretching: */
		padding-left: 30px;
	}
	img {
		object-fit: fill;
		/* max-height: 562px; */
		width: 100%;
		height: 100%;

		border-radius: 15px;
	}
	.img {
		flex: 1 1 auto;
		padding: 10px;
		width: 90%;
		max-width: 800px;
		/* height: 70%; */
		position: relative;
		/* display: grid;
		justify-content: center;
		align-content: center;
		grid-template-columns: 1fr; */
		margin: 0;
	}
	.container {
		color: white;
		display: grid;
		place-items: center;
		height: 100%;
	}
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
	@media (max-width: 480px) {
		svg,
		.num {
			display: none;
		}
		.info-flex {
			width: 150px;
		}
		.credits {
			font-size: 12px;
			line-height: 12px;
		}
		h1 {
			font-size: 18px;
		}
	}
</style>
