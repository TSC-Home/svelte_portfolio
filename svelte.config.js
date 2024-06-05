import adapter from '@sveltejs/adapter-vercel';
import { markdoc } from 'svelte-markdoc-preprocess';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

function absolute(path) {
	return join(dirname(fileURLToPath(import.meta.url)), path);
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		markdoc({
			layouts: {
				default: absolute('./src/markdoc/layouts/default.svelte')
			},
			nodes: absolute('./src/markdoc/nodes/_module.svelte')
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},

	extensions: ['.markdoc', '.svelte']
};

export default config;
