import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind()],
  routes:[
    { path: '/model-s', component: './src/components/ModelS.astro' },
    { path: '/model-3', component: './src/components/Model3.astro' },
    { path: '/model-x', component: './src/components/ModelX.astro' },
    { path: '/model-y', component: './src/components/ModelY.astro' },
    { path: '/powerwall', component: './src/components/Powerwall.astro' },
    { path: '/carga', component: './src/components/Carga.astro' },
  ]
});
