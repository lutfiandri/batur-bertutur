import RenderIf from 'components/element/RenderIf';
import Footer from 'components/template/footer/Footer';
import Navbar from 'components/template/navbar/Navbar';
import Head from 'next/head';

function DefaultLayout({ children, title = 'Batur Bertutur', noFooter }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <RenderIf when={!noFooter}>
        <Footer />
      </RenderIf>
    </>
  );
}

export default DefaultLayout;
