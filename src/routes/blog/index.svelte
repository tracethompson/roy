<script context="module">
	export async function load({ page, fetch, session, context }) {
		return fetch(`/blog.json`)
			.then((r) => r.json())
			.then((posts) => {
				return {
					props: {
						posts: posts
					}
				};
			});
	}
</script>

<script>
	import HomeButton from '$lib/HomeButton.svelte';
	export let posts;
	let formatter = new Intl.DateTimeFormat('en-us', {
		month: 'numeric',
		day: 'numeric',
		year: 'numeric'
	});
</script>

<svelte:head>
	<title>Blog</title>
	<style>
		:root {
			background: black;
		}
	</style>
</svelte:head>
<HomeButton>blog</HomeButton>
{#each posts as post}
	<div class="container">
		<a href="#{post.slug}" rel="external"><h1 class="Title" id={post.slug}>{post.title}</h1></a>
		<h2 class="Date">
			{formatter.format(new Date(Date.parse(post.date)))}
		</h2>

		<div class="Content">
			{@html post.html}
		</div>
		<hr />
	</div>
{/each}

<style>
	.container {
		color: white;
		width: 80%;
		margin-top: 40px;
		max-width: 750px;
		display: grid;
		margin-left: 80px;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto auto auto;
		gap: 0px 20px;
		grid-auto-flow: row;
		grid-template-areas:
			'Date Title'
			'Date Content'
			'hr hr';
		font-family: DIN Alternate;
	}

	.Date {
		grid-area: Date;
	}

	.Title {
		grid-area: Title;
	}

	.Content {
		grid-area: Content;
	}
	:global(img) {
		max-width: 100%;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
	hr {
		grid-area: hr;
		width: 100%;
	}
	h1 {
		font-style: normal;
		font-weight: bold;
		font-size: 56px;
		text-transform: uppercase;
	}

	@media (max-width: 768px) {
		.container {
			display: block;
			/* width: 80%; */
			margin: auto;
		}
	}
</style>
