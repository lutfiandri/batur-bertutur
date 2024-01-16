import RenderIf from 'components/element/RenderIf';
import Footer from 'components/template/footer/Footer';
import Navbar from 'components/template/navbar/Navbar';
import Head from 'next/head';

function DefaultLayout({ children, title = 'Batur Bertutur', noFooter }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main className="relative min-h-screen-no-header">{children}</main>
      <RenderIf when={!noFooter}>
        <Footer />
      </RenderIf>
    </>
  );
}

export default DefaultLayout;
