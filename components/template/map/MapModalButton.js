import Link from 'next/link';

function MapModalButton({ url = '', text, icon, external, onClick }) {
  if (onClick != undefined)
    return (
      <button
        onClick={onClick}
        className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-light stroke-[1.5px] py-2 px-3 text-sm font-medium transition-all duration-200 hover:text-blue"
      >
        {icon}
        <span>{text}</span>
      </button>
    );

  return (
    <Link href={url} passHref>
      <a
        target={external ? '_blank' : '_self'}
        className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-light stroke-[1.5px] py-2 px-3 text-sm font-medium transition-all duration-200 hover:text-blue"
      >
        {icon}
        <span>{text}</span>
      </a>
    </Link>
  );
}

export default MapModalButton;
