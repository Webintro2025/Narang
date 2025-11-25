// src/app/sitemap.xml/route.js
import { locations } from "@/marketplace";
const BASE_URL = 'https://chahatpackaging.in'; // or your Narang Steel domain

export async function GET() {
  const urls = [
    '/',
    '/about',
    '/contact',
    '/products',      
   
  ];



const allUrls = [
    ...urls,
    ...locations.map((loc) => `/${loc}`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?> 
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (path) => `  <url>
    <loc>${BASE_URL}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}