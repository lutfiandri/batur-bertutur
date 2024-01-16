// https://nextjs.org/learn-pages-router/seo/crawling-and-indexing/xml-sitemaps

import { getBlogData, getWisataData } from 'utils/getMarkdownData';
import { getBlogSlugs, getWisataSlugs } from 'utils/getSlugs';

const BASEURL = 'https://batur.id';

function formatDateToISO(dateString) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function generateSiteMap(urls = []) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://batur.id</loc>
        <lastmod>2024-01-15</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://batur.id/wisata</loc>
        <lastmod>2024-01-15</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.99</priority>
      </url>
      <url>
        <loc>https://batur.id/blog</loc>
        <lastmod>2024-01-15</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.98</priority>
      </url>
      <url>
        <loc>https://batur.id/peta</loc>
        <lastmod>2024-01-15</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.97</priority>
      </url>

      ${urls
        .map((url) => {
          return `
      <url>
        <loc>${url.loc}</loc>
        <lastmod>${url.lastmod}</lastmod>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
      </url>
      `;
        })
        .join('')}
    </urlset>
  `;
}

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const wisataSlugs = getWisataSlugs();
  const wisatas = wisataSlugs.map((slug) => getWisataData(slug));

  const blogSlugs = getBlogSlugs();
  const blogs = blogSlugs.map((slug) => getBlogData(slug));

  const urls = [];

  console.log(wisatas);

  wisatas.forEach((wisata) => {
    urls.push({
      loc: `${BASEURL}/wisata/${wisata?.meta?.slug}`,
      lastmod: formatDateToISO(wisata?.meta?.date),
      changefreq: 'daily',
      priority: wisata?.meta?.featured ? 0.7 : 0.6,
    });
  });

  blogs.forEach((blog) => {
    urls.push({
      loc: `${BASEURL}/blog/${blog?.meta?.slug}`,
      lastmod: formatDateToISO(blog?.meta?.date),
      changefreq: 'daily',
      priority: blog?.meta?.featured ? 0.7 : 0.6,
    });
  });

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(urls);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
