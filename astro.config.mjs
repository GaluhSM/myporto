import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://GaluhSM.github.io',
  base: '/myporto',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [svelte(), sitemap()]
});