import RenderIf from 'components/element/RenderIf';
import Footer from 'components/template/footer/Footer';
import Navbar from 'components/template/navbar/Navbar';
import Head from 'next/head';

function DefaultLayout({
  children,
  noFooter,
  title = 'Batur Bertutur',
  description = 'Batur Bertutur. Website Eduwisata Batur (Dieng), Banjarnegara',
  keywords,
  imageCardUrl = '/logo-batur-bertutur-color.svg',
  pageUrl = process.env.NEXT_PUBLIC_BASEURL,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* SEO Meta Tags */}
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content={
            keywords +
            'Batur, Dieng, Batur Dieng, Batur Bertutur, Batur Banjarnegara'
          }
        />
        {/* <meta name="author" content="Your Name" /> */}

        {/* Open Graph and Twitter Meta Tags for Social Media Sharing */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imageCardUrl} />
        <meta property="og:url" content={pageUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:creator" content="@yourtwitterhandle" /> */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageCardUrl} />

        {/* Canonical Tag to Avoid Duplicate Content Issues */}
        <link rel="canonical" href={pageUrl} />
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
