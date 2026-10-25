import { defineConfig } from 'astro/config';

export default defineConfig({
  // Deployed as a GitHub Pages project site at pimang62.github.io/yerin-kim/
  site: 'https://pimang62.github.io',
  base: '/yerin-kim',
  markdown: { shikiConfig: { theme: 'github-light' } }
});
