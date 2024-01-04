import Carousel from 'components/element/Carousel';
import { TbBrandGoogleMaps, TbBrandInstagram, TbId, TbX } from 'react-icons/tb';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import MapModalButton from './MapModalButton';

function MapModal({ wisata }) {
  const router = useRouter();

  const closeHandler = () => {
    router.push('/peta');
  };

  const isActive = useMemo(() => {
    return wisata?.meta?.slug != undefined;
  }, [wisata]);

  const facilities = useMemo(() => {
    return wisata?.meta?.facilities?.split(',').map((f) => f.trim());
  }, [wisata]);

  return (
    <div
      className={clsx(
        'pointer-events-none absolute top-0 left-0 isolate z-10 h-full w-[450px] p-4 transition-all duration-500 ease-in-out',
        isActive ? 'left-0' : 'left-[-500px]'
      )}
    >
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

        {/* back button */}
        <button
          onClick={closeHandler}
          className="group absolute top-4 -right-6 z-30 rounded-lg bg-white p-2 shadow-md "
        >
          <TbX className="h-4 w-4 transition-all duration-200 group-hover:stroke-[3px]"></TbX>
        </button>
      </div>
    </div>
  );
}

export default MapModal;
