// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://estelaoliveira.dev',
  base: '/estelaoliveiradevsite.github.io',
 
  
  integrations: [react(), tailwind(), sitemap()]
});

