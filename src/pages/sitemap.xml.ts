const pages = [
  '/',
  '/about',
  '/activities',
  '/leadership',
  '/recruitment',
  '/contact'
];

export const GET = () => {
  const siteUrl = import.meta.env.SITE_URL || 'https://minsu-triskelion.vercel.app';
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (path) => `
    <url>
      <loc>${siteUrl}${path}</loc>
      <changefreq>weekly</changefreq>
      <priority>${path === '/' ? '1.0' : '0.8'}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
};
