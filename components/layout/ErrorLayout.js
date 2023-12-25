import Container from 'components/element/Container';
import DefaultLayout from 'components/layout/DefaultLayout';
import Link from 'next/link';

function ErrorLayout({ seoTitle, title, subTitle }) {
  return (
    <DefaultLayout title={seoTitle ? seoTitle : title}>
      <Container>
        <div className="flex min-h-screen-no-header-footer flex-col justify-center">
          <h1 className="text-3xl font-bold">{title}</h1>
          <h2 className="text-lg font-semibold">{subTitle}</h2>
          <div className="h-8"></div>
          <Link href="/">
            <div role="button" className="text-lg font-bold">
              Kembali ke menu utama
            </div>
          </Link>
        </div>
      </Container>
    </DefaultLayout>
  );
}

export default ErrorLayout;
