import PostPreviewCard from 'components/element/card/PostPreviewCard';
import Container from 'components/element/Container';
import DefaultLayout from 'components/layout/DefaultLayout';
import PostsTemplate from 'components/template/post/PostContainerTemplate';
import { getWisataData } from 'utils/getMarkdownData';
import { getWisataSlugs } from 'utils/getSlugs';

function Wisata({ wisatas }) {
  return (
    <DefaultLayout title="Wisata - Batur Bertutur">
      <Container>
        <div className="min-h-screen-no-header pt-12 pb-32">
          <PostsTemplate
            title="Wisata Batur"
            subtitle="wisata"
            contents={wisatas}
            baseUrl="/wisata"
          />
        </div>
      </Container>
    </DefaultLayout>
  );
}

export default Wisata;

export async function getStaticProps() {
  const slugs = getWisataSlugs();
  const wisatas = slugs.map((slug) => getWisataData(slug));

  return {
    props: {
      wisatas,
    },
  };
}
