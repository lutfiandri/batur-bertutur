import Container from 'components/element/Container';
import DefaultLayout from 'components/layout/DefaultLayout';
import Image from 'next/image';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Home() {
  return (
    <DefaultLayout>
      <Container>
        <div className="flex min-h-screen-no-header flex-col items-center justify-center md:flex-row md:justify-start">
          {/* <div className="relative mr-0 h-[200px] w-[200px] overflow-hidden rounded-lg md:mr-8">
            <Image
              src="/images/lutfi-andriyanto.webp"
              alt="Lutfi Andriyanto"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
            />
          </div> */}
          <div className="flex flex-col space-y-1 pt-8 text-center md:mt-0 md:text-left">
            <div className="text-3xl font-bold ">Jelajah</div>
            <h1 className="text-4xl font-bold text-gray-dark dark:text-gray-light">
              Kecamatan Batur, Banjarnegara
            </h1>
            <h2 className="text-lg font-bold">Batur Bertutur - KKN-PPM UGM</h2>
          </div>
        </div>
      </Container>
    </DefaultLayout>
  );
}
