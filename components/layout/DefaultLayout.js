import Footer from 'components/element/Footer';
import Navbar from 'components/element/Navbar';
import Head from 'next/head';

function DefaultLayout({ children, title = 'Lutfi Andriyanto' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main className="py-32">{children}</main>
      <Footer />
    </>
  );
}

export default DefaultLayout;