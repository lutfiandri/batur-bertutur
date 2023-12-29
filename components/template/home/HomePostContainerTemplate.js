import dynamic from 'next/dynamic';
import PostMarkdownComponents from '../post/PostMarkdownComponents';
import Link from 'next/link';
const Masonry = dynamic(() => import('react-smart-masonry'), { ssr: false });

function HomePostContainerTemplate({
  title = 'Title',
  linkUrl = '#',
  linkText = 'Lihat semua ....',
  children,
}) {
  return (
    <div className="mx-8 lgp:mx-0">
      <div className="-mx-8 mb-8 flex flex-col items-baseline justify-between lgp:mx-0 lgp:flex-row">
        <PostMarkdownComponents.h1>{title}</PostMarkdownComponents.h1>
        <Link href={linkUrl}>
          <p
            role="button"
            className="text-lg font-semibold text-gray hover:text-blue"
          >
            {linkText}
          </p>
        </Link>
      </div>
      <div className="-mx-8">
        <Masonry
          gap={{ default: '1rem', lg: '2rem' }}
          autoArrange={true}
          breakpoints={{ default: 0, lg: 800 }}
          columns={{ default: 1, lg: 2 }}
        >
          {children}
        </Masonry>
      </div>
    </div>
  );
}

export default HomePostContainerTemplate;
