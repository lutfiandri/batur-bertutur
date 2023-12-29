import DefaultLayout from 'components/layout/DefaultLayout';
import Container from 'components/element/Container';
import RenderIf from 'components/element/RenderIf';
import PostMarkdown from 'components/template/post/PostMarkdown';
import Image from 'next/image';

import { getWisataData } from 'utils/getMarkdownData';
import { getWisataSlugs } from 'utils/getSlugs';

function ReadWisata({ wisata }) {
  return (
    <DefaultLayout title={wisata?.meta?.title + ' - Batur Bertutur'}>
      <RenderIf when={wisata?.meta?.thumbnail}>
        <div className="relative mb-4 aspect-[4/3] overflow-hidden object-center md:aspect-[16/9] lg:aspect-[2.39/1] 2xl:aspect-[4/1]">
          <Image
            src={`${wisata?.meta?.thumbnail}`}
            alt={`${wisata?.meta?.title}`}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            // className="duration-500 group-hover:scale-105"
          />
        </div>
      </RenderIf>

      <Container>
        <div className="my-16 min-h-screen-no-header">
          <h1 className="mb-8 text-3xl font-bold md:text-4xl">
            {wisata?.meta?.title}
          </h1>

          <PostMarkdown>{wisata?.body}</PostMarkdown>
        </div>
      </Container>
    </DefaultLayout>
  );
}

export default ReadWisata;

export async function getStaticPaths() {
  const slugs = getWisataSlugs();

  const paths = slugs.map((slug) => ({
    params: { slug: slug },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const wisata = getWisataData(slug);

  return {
    props: {
      wisata: wisata,
    },
  };
}
