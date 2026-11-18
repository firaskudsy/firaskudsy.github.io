// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

/** Self-hosted fonts: files come from the @fontsource packages (latin subset). */
/** @param {string} pkg @param {string} file */
const fs = (pkg, file) => `./node_modules/@fontsource/${pkg}/files/${file}`;

export default defineConfig({
  site: 'https://firaskudsy.github.io',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  // Keep note text exactly as written (no curly quotes / dash conversion).
  markdown: { smartypants: false },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Source Serif 4',
      cssVariable: '--font-source-serif',
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [
          { weight: 400, style: 'normal', src: [fs('source-serif-4', 'source-serif-4-latin-400-normal.woff2')] },
          { weight: 400, style: 'italic', src: [fs('source-serif-4', 'source-serif-4-latin-400-italic.woff2')] },
          { weight: 600, style: 'normal', src: [fs('source-serif-4', 'source-serif-4-latin-600-normal.woff2')] },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Instrument Sans',
      cssVariable: '--font-instrument-sans',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          { weight: 400, style: 'normal', src: [fs('instrument-sans', 'instrument-sans-latin-400-normal.woff2')] },
          { weight: 500, style: 'normal', src: [fs('instrument-sans', 'instrument-sans-latin-500-normal.woff2')] },
          { weight: 600, style: 'normal', src: [fs('instrument-sans', 'instrument-sans-latin-600-normal.woff2')] },
        ],
      },
    },
  ],
});
