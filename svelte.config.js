/** @type {import('@sveltejs/kit').Config} */
import sveltePreprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// adapter: adapter({ fallback: 'index.html' })
		adapter: vercel({ fallback: 'index.html' })
	},
	preprocess: [
		sveltePreprocess({
			defaults: {
				style: 'scss'
			},
			// postcss: true,
			scss: {
				// prependData: `@import 'src/styles/variables/index.scss';`,
				outputStyle: 'compressed'
			}
		})
	]
};

export default config;
