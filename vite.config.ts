import { sveltekit } from '@sveltejs/kit/vite';
import mkcert from 'vite-plugin-mkcert';
import { defineConfig } from 'vite';
import { threeMinifier } from "@yushijinhun/three-minifier-rollup";

export default defineConfig({
	plugins: [
		{ ...threeMinifier(), enforce: "pre" },
		mkcert(), 
		sveltekit(),
	],
	ssr: {
		noExternal: ['three']
	}
});
