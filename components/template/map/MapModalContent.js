import Carousel from 'components/element/Carousel';
import {
  TbBrandGoogleMaps,
  TbBrandInstagram,
  TbId,
  TbShare3,
} from 'react-icons/tb';
import MapModalButton from './MapModalButton';
import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';

function MapModalContent({ wisata }) {
  const router = useRouter();

  const facilities = useMemo(() => {
    return wisata?.meta?.facilities?.split(',').map((f) => f.trim());
  }, [wisata]);

  const copyToClipboardHandler = async () => {
    try {
      const url = window?.location?.href;
      await navigator.clipboard.writeText(url);
    } catch (err) {
      console.error('Unable to copy text to clipboard', err);
    }
  };

  return (
    <div className="pointer-events-auto h-full w-full overflow-auto rounded-lg bg-white shadow-lg">
      <div className="overflow-hidden rounded-t-lg">
        <Carousel
          imageSrcs={wisata?.meta?.gallery?.map((image) => image?.image)}
          gap={8}
          delay={1500}
        ></Carousel>
      </div>

      <div className="flex flex-col gap-4 overflow-auto px-4 py-6">
        <h1 className="text-lg font-bold">{wisata?.meta?.title}</h1>
        <div className="-mt-2">{wisata?.meta?.desc}</div>
        <div className="grid grid-cols-2 gap-4">
          {wisata?.meta?.instagramUrl ? (
            <MapModalButton
              url={wisata?.meta?.instagramUrl}
              text="Buka di Instagram"
              icon={<TbBrandInstagram className="h-6 w-6" />}
              external
            />
          ) : null}

          {wisata?.meta?.googleMapsUrl ? (
            <MapModalButton
              url={wisata?.meta?.googleMapsUrl}
              text="Buka di Google Maps"
              icon={<TbBrandGoogleMaps className="h-6 w-6" />}
              external
            />
          ) : null}

          <MapModalButton
            url={'/wisata/' + wisata?.meta?.slug}
            text="Baca detail informasi"
            icon={<TbId className="h-6 w-6" />}
          />

          <MapModalButton
            onClick={copyToClipboardHandler}
            className="pointer-events-none cursor-pointer"
            text="Bagikan"
            icon={<TbShare3 className="h-6 w-6" />}
          />
        </div>

        <div>
          <div className="font-bold">Fasilitas</div>
          <ul className="ml-6 list-outside list-disc text-justify leading-8">
            {facilities?.map((facility, i) => (
              <li className="-mb-1.5" key={i + facility}>
                {facility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MapModalContent;
