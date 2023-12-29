import { Img as NImage } from 'components/element/img/Img';
import RenderIf from 'components/element/RenderIf';

const P = ({ children }) => {
  // console.log(children); // Array [ "ini adalah file pdf" ]
  const line = children?.[0];
  if (typeof line === 'string') {
    if (line?.includes('!!!file:image')) {
      const src = line.split(':').at(-1);
      return <Img src={src} />;
    }

    if (line?.includes('!!!file:video')) {
      const src = line.split(':').at(-1);
      return <Video src={src} />;
    }

    if (line?.includes('!!!file:pdf')) {
      const src = line.split(':').at(-1);
      return (
        <div className="iframe-wrapper">
          <iframe src={src}></iframe>
        </div>
      );
    }
  }

  return <p className="my-4 text-justify text-lg leading-8">{children}</p>;
};

const Img = ({ src, alt, title }) => {
  if (src.includes('mp4') || src.includes('webm')) {
    return <Video src={src} alt={alt} title={title}></Video>;
  }

  return (
    <figure className="my-4 mx-auto w-full max-w-[600px]">
      <NImage src={src} alt={alt} unoptimized />
      <RenderIf when={title}>
        <figcaption className="text-center text-[0.7em] italic">
          {title}
        </figcaption>
      </RenderIf>
    </figure>
  );
};

const Video = ({ src, alt, title }) => {
  return (
    <figure className="my-4 mx-auto w-full max-w-[600px]">
      <video
        loop
        muted
        autoPlay
        controls=""
        className="mx-auto w-full max-w-[600px]"
      >
        <source src={src} />
      </video>
      <RenderIf when={title}>
        <figcaption className="text-center text-[0.7em] italic">
          {title}
        </figcaption>
      </RenderIf>
    </figure>
  );
};

const H1 = ({ children }) => {
  return <h1 className="mt-8 mb-4 text-2xl font-bold leading-8">{children}</h1>;
};

const H2 = ({ children }) => {
  return <h2 className="mt-6 mb-4 text-xl font-bold leading-8">{children}</h2>;
};

const H3 = ({ children }) => {
  return <h3 className="mt-6 mb-4 text-lg font-bold leading-8">{children}</h3>;
};

const A = ({ children, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-blue transition-all hover:underline"
    >
      {children}
    </a>
  );
};

const Ul = ({ children }) => {
  return (
    <ul className="my-4 ml-6 list-outside list-disc text-justify leading-8">
      {children}
    </ul>
  );
};

const Ol = ({ children }) => {
  return (
    <ol className="my-4 ml-6 list-outside list-decimal text-justify leading-8">
      {children}
    </ol>
  );
};

const Li = ({ children }) => {
  return <li className="my-1">{children}</li>;
};

const Blockquote = ({ children }) => {
  return (
    <blockquote className="my-4 rounded-lg border-l-4 border-blue bg-blue-light p-2 px-6">
      {children}
    </blockquote>
  );
};

const Code = ({ children }) => <span className="text-[0.9em]">{children}</span>;

const Hr = () => (
  <div className="my-8 select-none space-x-4 text-center text-xl">
    <span>•</span>
    <span>•</span>
    <span>•</span>
  </div>
);

const Table = ({ children }) => (
  <table className="border-spacing-0">{children}</table>
);

const Th = ({ children }) => (
  <th className="rounded-2xl border border-gray px-3 py-1 font-bold">
    {children}
  </th>
);

const Td = ({ children }) => (
  <td className="rounded-2xl border border-gray bg-red px-3 py-1">
    {children}
  </td>
);

const PostMarkdownComponents = {
  p: P,
  img: Img,
  h1: H1,
  h2: H2,
  h3: H3,
  a: A,
  ul: Ul,
  ol: Ol,
  li: Li,
  blockquote: Blockquote,
  code: Code,
  hr: Hr,
  table: Table,
  th: Th,
  td: Td,
};

export default PostMarkdownComponents;
