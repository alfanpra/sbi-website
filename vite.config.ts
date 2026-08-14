import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const ROUTES = [
  { path: '/', priority: '1.0' },
  { path: '/about', priority: '0.8' },
  { path: '/services', priority: '0.8' },
  { path: '/team', priority: '0.6' },
  { path: '/contact', priority: '0.9' },
] as const;

function seoFiles(): Plugin {
  const site = () => (process.env.VITE_SITE_URL ?? '').replace(/\/$/, '');

  return {
    name: 'sbi-seo-files',
    transformIndexHtml(html) {
      const origin = site();
      if (!origin) return html;
      return html
        .replaceAll('content="/og.jpg"', `content="${origin}/og.jpg"`)
        .replace(
          '<title>',
          `<link rel="canonical" href="${origin}/" />\n    <meta property="og:url" content="${origin}/" />\n    <title>`,
        );
    },
    apply: 'build',
    closeBundle() {
      const origin = site();
      const dist = resolve(fileURLToPath(new URL('.', import.meta.url)), 'dist');
      const robots = [
        'User-agent: *',
        'Allow: /',
        'Disallow: /404.html',
        '',
        ...(origin ? [`Sitemap: ${origin}/sitemap.xml`, ''] : []),
      ].join('\n');
      writeFileSync(resolve(dist, 'robots.txt'), robots);
      if (!origin) return;
      const urls = ROUTES.map(
        (route) => `  <url>
    <loc>${origin}${route.path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
      ).join('\n');
      writeFileSync(
        resolve(dist, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), seoFiles()],
  build: {
    target: 'es2022',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'react';
          }
          if (id.includes('node_modules/react-router')) return 'router';
        },
      },
    },
  },
});
