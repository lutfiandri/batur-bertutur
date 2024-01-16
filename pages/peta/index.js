import DefaultLayout from 'components/layout/DefaultLayout';
import MapModal from 'components/template/map/MapModal';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { getWisataData } from 'utils/getMarkdownData';
import { getWisataSlugs } from 'utils/getSlugs';

const Map = dynamic(() => import('components/template/map/Map'), {
  ssr: false,
});

function PetaWisata({ wisatas = [] }) {
  const [activeWisata, setActiveWisata] = useState({});

  const router = useRouter();

  const isActive = useMemo(() => {
    return activeWisata?.meta?.slug != undefined;
  }, [activeWisata]);

  const title = useMemo(() => {
    const base = 'Batur Bertutur';
    const active = isActive
      ? 'Peta ' + activeWisata?.meta?.title + ' - '
      : 'Peta Wisata - ';
    return active + base;
  }, [activeWisata, isActive]);

  useEffect(() => {
    if (!router) return;
    if (!wisatas.length) return;

    const w = router.query.w;
    setActiveWisata({});
    if (!w) return;

    const selectedWisata = wisatas.find((wisata) => wisata?.meta?.slug === w);

    if (!selectedWisata?.meta?.slug) {
      router.replace('/peta');
    }

    setActiveWisata(selectedWisata);
  }, [router, wisatas]);

  return (
    <DefaultLayout
      noFooter
      title={title}
      description="Temukan wisata di Dieng, Kecamatan Batur, Banjarnegara, Jawa Tengah"
      pageUrl={process.env.NEXT_PUBLIC_BASEURL + '/peta'}
      keywords="Peta, Map, Maps"
    >
      <Map wisatas={wisatas} activeWisata={activeWisata} />
      <MapModal wisata={activeWisata} />
    </DefaultLayout>
  );
}

export default PetaWisata;

export async function getStaticProps() {
  const slugs = getWisataSlugs();
  const wisatas = slugs.map((slug) => getWisataData(slug));

  return {
    props: {
      wisatas,
    },
  };
}
