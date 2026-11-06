import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE_URL || 'https://minsu-triskelion.vercel.app',
  vite: { plugins: [tailwindcss()] },
});