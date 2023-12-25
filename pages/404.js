import ErrorLayout from 'components/layout/ErrorLayout';

function Custom404() {
  return (
    <ErrorLayout
      title="Halaman tidak ditemukan"
      subTitle="Maaf, tidak ada halaman apapun di url ini"
    />
  );
}

export default Custom404;
