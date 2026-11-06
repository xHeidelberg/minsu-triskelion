export const GET = () => {
  const siteUrl = import.meta.env.SITE_URL || 'https://minsu-triskelion.vercel.app';
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
