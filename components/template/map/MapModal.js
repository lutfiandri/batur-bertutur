import { TbX } from 'react-icons/tb';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import MapModalContent from './MapModalContent';

function MapModal({ wisata }) {
  const router = useRouter();

  const closeHandler = () => {
    router.push('/peta');
  };

  const isActive = useMemo(() => {
    return wisata?.meta?.slug != undefined;
  }, [wisata]);

  return (
    <div
      className={clsx(
        'pointer-events-none absolute top-0 left-0 isolate z-10 h-full w-full p-2 transition-all duration-500 ease-in-out md:w-[450px] md:p-4',
        isActive ? 'left-0' : 'left-[-100%] md:left-[-500px]'
      )}
    >
      <MapModalContent wisata={wisata} />

      {/* back button */}
      <button
        onClick={closeHandler}
        className="group pointer-events-auto absolute top-4 right-4 z-30 rounded-lg bg-white p-2 shadow-md md:-right-6"
      >
        <TbX className="h-4 w-4 transition-all duration-200 group-hover:stroke-[3px]"></TbX>
      </button>
    </div>
  );
}

export default MapModal;
