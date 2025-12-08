import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://GaluhSM.github.io',
  base: '',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [svelte()]
});