import Carousel from 'components/element/Carousel';
import DefaultLayout from 'components/layout/DefaultLayout';
import dynamic from 'next/dynamic';
import { TbBrandGoogleMaps } from 'react-icons/tb';
import Link from 'next/link';

const Map = dynamic(() => import('components/template/map/Map'), {
  ssr: false,
});

function PetaWisata() {
  return (
    <DefaultLayout noFooter>
      <Map />
      <div className="pointer-events-none absolute top-0 left-0 isolate z-10 h-full w-[450px] p-4">
        <div className="pointer-events-auto h-full w-full overflow-auto rounded-lg bg-white shadow-lg">
          <div className="overflow-hidden rounded-t-lg">
            <Carousel
              imageSrcs={[
                'https://th.bing.com/th/id/OIP.0SfWOwEBGVR8F7LrhXVGyQHaEV',
                'https://th.bing.com/th/id/OIP.gZxOTzlh3-CTpYaFDcJ6HgHaFT',
              ]}
              gap={8}
              delay={1500}
            ></Carousel>
          </div>

          <div className="flex flex-col gap-4 overflow-auto px-4 py-6">
            <h1 className="text-lg font-bold">Telaga Dringo</h1>
            <div className="-mt-2">
              Telaga Dringo, tersembunyi di ketinggian lereng Gunung Prau.
              Dikelilingi oleh hamparan hijau perbukitan dan pepohonan yang
              rindang, telaga ini menjadi tempat pelarian yang sempurna bagi
              para pencinta alam yang mencari keheningan dan kedamaian.
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Link href="#">
                <div className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-light stroke-[1.5px] py-2 px-3 text-sm font-medium transition-all duration-200 hover:text-blue">
                  <TbBrandGoogleMaps className="h-6 w-6" />
                  <span>Buka di Google Maps</span>
                </div>
              </Link>
              <Link href="#">
                <div className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-light stroke-[1.5px] py-2 px-3 text-sm font-medium transition-all duration-200 hover:text-blue">
                  <TbBrandGoogleMaps className="h-6 w-6" />
                  <span>Buka di Google Maps</span>
                </div>
              </Link>
              <Link href="#">
                <div className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-light stroke-[1.5px] py-2 px-3 text-sm font-medium transition-all duration-200 hover:text-blue">
                  <TbBrandGoogleMaps className="h-6 w-6" />
                  <span>Buka di Google Maps</span>
                </div>
              </Link>
            </div>

            <div>
              <div className="font-bold">Fasilitas</div>
              <ul className="ml-6 list-outside list-disc text-justify leading-8">
                <li className="-mb-1.5">Kamar Mandi</li>
                <li className="-mb-1.5">Warung Jajan</li>
                <li className="-mb-1.5">Musholla</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default PetaWisata;
