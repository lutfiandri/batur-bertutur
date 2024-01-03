import DefaultLayout from 'components/layout/DefaultLayout';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('components/template/map/Map'), {
  ssr: false,
});

function PetaWisata() {
  return (
    <DefaultLayout noFooter>
      <Map></Map>
    </DefaultLayout>
  );
}

export default PetaWisata;
