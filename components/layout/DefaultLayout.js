import Footer from 'components/template/footer/Footer';
import Navbar from 'components/template/navbar/Navbar';
import Head from 'next/head';

function DefaultLayout({ children, title = 'Batur Bertutur' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
