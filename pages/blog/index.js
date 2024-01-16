import PostPreviewCard from 'components/element/card/PostPreviewCard';
import Container from 'components/element/Container';
import DefaultLayout from 'components/layout/DefaultLayout';
import PostsTemplate from 'components/template/post/PostContainerTemplate';
import { getBlogData } from 'utils/getMarkdownData';
import { getBlogSlugs } from 'utils/getSlugs';

function Blog({ blogs }) {
  return (
    <DefaultLayout
      title="Blog - Batur Bertutur"
      description="Temukan blog seputar Kecamatan Batur, Banjarnegara, Jawa Tengah"
      pageUrl={process.env.NEXT_PUBLIC_BASEURL + '/blog'}
      keywords="Blog, Artikel"
    >
      <Container>
        <div className="min-h-screen-no-header pt-12 pb-32">
          <PostsTemplate
            title="Blog Batur"
            subtitle="blog"
            contents={blogs}
            baseUrl="/blog"
          />
        </div>
      </Container>
    </DefaultLayout>
  );
}

export default Blog;

export async function getStaticProps() {
  const slugs = getBlogSlugs();
  const blogs = slugs.map((slug) => getBlogData(slug));

  return {
    props: {
      blogs,
    },
  };
}
