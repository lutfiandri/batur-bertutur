import fs from 'fs';
import path from 'path';
import frontmatter from 'front-matter';

function getMarkdownData(...paths) {
  const markdown = fs.readFileSync(path.join(...paths), 'utf-8');

  const { attributes, body } = frontmatter(markdown);
  attributes.slug = paths?.at(-1)?.split('.')?.at(0);
  attributes.date = attributes?.date?.toISOString() || '';

  return { meta: attributes, body };
}

export function getArticleData(slug) {
  return getMarkdownData('_posts', 'article', slug + '.md');
}
export function getPortfolioData(slug) {
  return getMarkdownData('_posts', 'portfolio', slug + '.md');
}
