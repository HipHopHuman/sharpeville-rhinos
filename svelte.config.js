import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : '/sharpeville-rhinos'
		},
		entries: []
	},
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx']
};

export default config;
