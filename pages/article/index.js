import ArticleCard from 'components/element/card/ArticleCard';
import PostPreviewCard from 'components/element/card/PostPreviewCard';
import Container from 'components/element/Container';
import DefaultLayout from 'components/layout/DefaultLayout';
import PostsTemplate from 'components/template/PostsTemplate';
import { getArticleData } from 'utils/getMarkdownData';
import { getArticleSlugs } from 'utils/getSlugs';
// import { findAllArticles } from 'utils/service/article';

function Article({ articles }) {
  return (
    <DefaultLayout title="Article">
      <Container>
        <div className="min-h-screen-no-header py-32">
          <PostsTemplate title="Latest Content" subtitle="Articles">
            {articles.map((article) => (
              <PostPreviewCard
                key={article.meta.slug}
                meta={article.meta}
                baseUrl="article"
              />
            ))}
          </PostsTemplate>
        </div>
      </Container>
    </DefaultLayout>
  );
}

export default Article;

export async function getStaticProps() {
  const slugs = getArticleSlugs();
  const articles = slugs.map((slug) => getArticleData(slug));

  return {
    props: {
      articles,
    },
  };
}
