import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';
import RenderIf from '../RenderIf';
import { useMemo } from 'react';

function PostPreviewCard({ meta, baseUrl }) {
  const { title, desc, slug, tags = '', thumbnail } = meta;

  const tagsArr = useMemo(() => {
    try {
      return tags.split(',').map((tag) => tag.trim());
    } catch (error) {
      return [];
    }
  }, [tags]);

  return (
    <Link href={`/${baseUrl}/${slug}`}>
      <a className="group block w-full overflow-hidden rounded-lg bg-white">
        <RenderIf when={thumbnail}>
          <div className="relative mb-4 aspect-[4/3] overflow-hidden object-center">
            <Image
              src={`${thumbnail}`}
              alt={title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="duration-500 group-hover:scale-105"
            />
          </div>
        </RenderIf>
        <div className="px-4 pt-2 pb-4 sm:px-8 sm:pb-8">
          <div className="mb-2">
            <h2 className="flex items-center gap-2 text-lg font-bold delay-[0ms] duration-[0ms] group-hover:text-blue">
              <span>{title}</span>
            </h2>
            <div className="flex flex-wrap text-gray">
              <style jsx>{`
                .jsx-tag:not(:last-child)::after {
                  content: '·';
                  font-size: 1em;
                  margin: 0 0.25em;
                }
              `}</style>
              {tagsArr.map((tag, index) => (
                // eslint-disable-next-line tailwindcss/no-custom-classname
                <div className="jsx-tag" key={index}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div>{desc}</div>
        </div>
      </a>
    </Link>
  );
}

export default PostPreviewCard;
