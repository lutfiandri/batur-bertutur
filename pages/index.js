import Container from 'components/element/Container';
import DefaultLayout from 'components/layout/DefaultLayout';
import Image from 'next/image';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import PostMarkdownComponents from 'components/template/post/PostMarkdownComponents';
import { getHomeData, getWisataData } from 'utils/getMarkdownData';
import PostMarkdown from 'components/template/post/PostMarkdown';
import PostContainerTemplate from 'components/template/post/PostContainerTemplate';
import HomePostContainerTemplate from 'components/template/home/HomePostContainerTemplate';
import { getWisataSlugs } from 'utils/getSlugs';
import { useMemo } from 'react';

export default function Home({ home, wisatas }) {
  const featuredWisatas = useMemo(() => {
    return wisatas.filter((wisata) => wisata?.meta?.featured);
  }, [wisatas]);

  return (
    <DefaultLayout>
      <Container>
        <div className="flex min-h-screen-no-header flex-col items-center justify-center md:flex-row md:justify-start">
          <div className="flex flex-col space-y-1 pt-8 text-center md:mt-0 md:text-left">
            <div className="text-3xl font-bold ">Jelajah</div>
            <h1 className="text-4xl font-bold text-gray-dark dark:text-gray-light">
              Kecamatan Batur, Banjarnegara
            </h1>
            <h2 className="text-lg font-bold">
              KKN-PPM UGM Periode IV 2023/2024
            </h2>
          </div>
        </div>
      </Container>

      {/* Mengenal Kecamatan Batur */}
      <Container>
        <div className="my-16 flex flex-col">
          <PostMarkdownComponents.h1>
            Mengenal Kecamatan Batur
          </PostMarkdownComponents.h1>
          <PostMarkdown>{home?.body}</PostMarkdown>
        </div>
      </Container>

      {/* Mengenal Kecamatan Batur */}
      <Container>
        <div className="my-16 flex flex-col">
          <HomePostContainerTemplate
            title="Wisata Batur"
            linkText="Lihat semua wisata &rarr;"
            linkUrl="/wisata"
            contents={featuredWisatas}
          ></HomePostContainerTemplate>
        </div>
      </Container>
    </DefaultLayout>
  );
}

export async function getStaticProps({ params }) {
  const home = getHomeData();

  const slugs = getWisataSlugs();
  const wisatas = slugs.map((slug) => getWisataData(slug));

  return {
    props: {
      home: home,
      wisatas: wisatas,
    },
  };
}
