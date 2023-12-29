import Container from 'components/element/Container';
import DefaultLayout from 'components/layout/DefaultLayout';
import Image from 'next/image';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import PostMarkdownComponents from 'components/template/post/PostMarkdownComponents';
import { getHomeData } from 'utils/getMarkdownData';
import PostMarkdown from 'components/template/post/PostMarkdown';
import PostContainerTemplate from 'components/template/post/PostContainerTemplate';
import HomePostContainerTemplate from 'components/template/home/HomePostContainerTemplate';

export default function Home({ home }) {
  console.log('home', home);
  return (
    <DefaultLayout>
      <Container>
        <div className="flex min-h-screen-no-header flex-col items-center justify-center md:flex-row md:justify-start">
          {/* <div className="relative mr-0 h-[200px] w-[200px] overflow-hidden rounded-lg md:mr-8">
            <Image
              src="/images/lutfi-andriyanto.webp"
              alt="Lutfi Andriyanto"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
            />
          </div> */}
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
          ></HomePostContainerTemplate>
        </div>
      </Container>
    </DefaultLayout>
  );
}

export async function getStaticProps({ params }) {
  const home = getHomeData();

  return {
    props: {
      home: home,
    },
  };
}
