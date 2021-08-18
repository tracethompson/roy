<script>
	import Video from './icons/Video.svelte';
	import Blog from './icons/Blog.svelte';
	import Mail from './icons/Mail.svelte';
	import Music from './icons/Music.svelte';
	import Phone from './icons/Phone.svelte';
	import Shop from './icons/Shop.svelte';
	import Tour from './icons/Tour.svelte';

	let icons = {
		video: Video,
		blog: Blog,
		mail: Mail,
		music: Music,
		phone: Phone,
		shop: Shop,
		tour: Tour
	};

	export let icon;
</script>

<svelte:component this={icons[icon]} />
