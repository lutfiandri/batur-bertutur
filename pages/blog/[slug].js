import DefaultLayout from 'components/layout/DefaultLayout';
import Container from 'components/element/Container';
import RenderIf from 'components/element/RenderIf';
import PostMarkdown from 'components/template/post/PostMarkdown';
import Image from 'next/image';

import { getBlogData } from 'utils/getMarkdownData';
import { getBlogSlugs } from 'utils/getSlugs';

function ReadBlog({ blog }) {
  const formattedDate = useMemo(() => {
    const date = new Date(blog?.meta?.date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const formatter = new Intl.DateTimeFormat('id-ID', options);
    const formatted = formatter.format(date);

    return formatted;
  }, [blog]);

  return (
    <DefaultLayout title={blog?.meta?.title + ' - Batur Bertutur'}>
      <RenderIf when={blog?.meta?.thumbnail}>
        <div className="relative mb-4 aspect-[4/3] overflow-hidden object-center md:aspect-[16/9] lg:aspect-[2.39/1] 2xl:aspect-[4/1]">
          <Image
            src={`${blog?.meta?.thumbnail}`}
            alt={`${blog?.meta?.title}`}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            // className="duration-500 group-hover:scale-105"
          />
        </div>
      </RenderIf>

      <Container>
        <div className="my-16 min-h-screen-no-header">
          <div className="mb-8 flex flex-col gap-2">
            <h1 className="text-3xl font-bold md:text-4xl">
              {wisata?.meta?.title}
            </h1>
            <div className="text-sm text-gray lg:text-base">
              Ditulis pada {formattedDate}
            </div>
          </div>

          <PostMarkdown>{blog?.body}</PostMarkdown>
        </div>
      </Container>
    </DefaultLayout>
  );
}

export default ReadBlog;

export async function getStaticPaths() {
  const slugs = getBlogSlugs();

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

  const blog = getBlogData(slug);

  return {
    props: {
      blog: blog,
    },
  };
}
