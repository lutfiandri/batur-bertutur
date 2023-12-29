import fs from 'fs';
import path from 'path';
import frontmatter from 'front-matter';
import { preprocessMarkdownData } from './preprocessMarkdownData';

function getMarkdownData(...paths) {
  const markdown = fs.readFileSync(path.join(...paths), 'utf-8');

  const { attributes, body } = frontmatter(markdown);
  attributes.slug = paths?.at(-1)?.split('.')?.at(0);
  attributes.date = attributes?.date?.toISOString() || '';

  const cleanBody = preprocessMarkdownData(body);

  return { meta: attributes, body: cleanBody };
}

export function getArticleData(slug) {
  return getMarkdownData('_posts', 'article', slug + '.md');
}
export function getPortfolioData(slug) {
  return getMarkdownData('_posts', 'portfolio', slug + '.md');
}

export function getWisataData(slug) {
  return getMarkdownData('_posts', 'wisata', slug + '.md');
}
export function getBlogData(slug) {
  return getMarkdownData('_posts', 'blog', slug + '.md');
}

export function getHomeData() {
  return getMarkdownData('_posts', 'home', 'home.md');
}
