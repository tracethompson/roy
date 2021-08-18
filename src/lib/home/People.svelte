<script>
	import simplexNoise from 'simplex-noise';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import PeopleSVG from './PeopleSVG.svelte';

	let simplex = new simplexNoise();
	let rafID;
	let ppl;
	let stepAmt = 0.0005;
	let mag = tweened(0, { duration: 3000 }); //ease in mag to prevent svg from jumping after mount
	onMount(() => {
		mag.set(1);
		ppl = [
			...document.querySelectorAll('path[id^=Man]'),
			...document.querySelectorAll('path[id^=Woman]')
		];
		loop();
		return () => {
			cancelAnimationFrame(rafID);
		};
	});

	function loop() {
		ppl.forEach((el, i) =>
			el.setAttribute(
				`transform`,
				`translate(${simplex.noise2D(i + rafID * stepAmt, 0) * i * $mag} ${
					simplex.noise2D(i * 1000 + rafID * stepAmt, 0) * i * $mag
				})`
			)
		);
		rafID = requestAnimationFrame(loop);
	}
</script>

<PeopleSVG />
