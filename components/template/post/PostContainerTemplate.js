import PostPreviewCard from 'components/element/card/PostPreviewCard';
import { TbSearch } from 'react-icons/tb';
import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';
const Masonry = dynamic(() => import('react-smart-masonry'), { ssr: false });

function PostContainerTemplate({
  title = 'Title',
  subtitle = 'Subtitle',
  baseUrl = '/wisata',
  contents = [],
}) {
  const [search, setSearch] = useState('');

  const filteredContents = useMemo(() => {
    if (!search.trim()) return contents;

    const keywords = search.split(' ').filter((keyword) => keyword !== '');

    const filtered = contents.filter((content) =>
      keywords.every(
        (keyword) =>
          content?.meta?.title?.toLowerCase().includes(keyword) ||
          content?.meta?.tags?.toLowerCase()?.includes(keyword)
      )
    );

    return filtered;
  }, [search, contents]);

  const searchChangeHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className="mx-8 lgp:mx-0">
      {/* title */}
      <div className="-mx-8 mb-8 flex items-baseline justify-between lgp:mx-0">
        <h1 className="text-4xl font-extrabold">{title}</h1>
        <p className="hidden text-lg font-semibold text-gray sm:block">
          {contents?.length} {subtitle}
        </p>
      </div>

      {/* search bar */}
      <div className="relative -mx-8 mb-4 lg-masonry:mb-8">
        <TbSearch className="absolute top-1/2 left-8 -translate-y-1/2 stroke-2"></TbSearch>
        <input
          type="text"
          className="block w-full rounded-lg border border-gray-light bg-white py-4 pr-8 pl-16 text-gray-dark outline-none"
          onChange={searchChangeHandler}
          placeholder="Cari judul atau tag"
        />
      </div>

      {/* masonry */}
      <div className="-mx-8">
        <Masonry
          gap={{ default: '1rem', lg: '2rem' }}
          autoArrange={true}
          breakpoints={{ default: 0, lg: 800 }}
          columns={{ default: 1, lg: 2 }}
        >
          {filteredContents.map((wisata) => (
            <PostPreviewCard
              key={wisata.meta.slug}
              meta={wisata.meta}
              baseUrl={baseUrl}
            />
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default PostContainerTemplate;
