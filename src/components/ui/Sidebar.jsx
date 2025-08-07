import { Link } from '../content-course/navigation/Link';
import { twMerge } from 'tailwind-merge';

export const Sidebar = ({ className }) => {
  const defaultStyle =
    'sticky top-0 overflow-y-scroll flex flex-col p-1 items-start';
  const links = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
    { label: 'Modal', path: '/modal' },
    { label: 'Tables', path: '/table' },
    { label: 'Counter', path: '/counter' },
    { label: 'Playlist', path: '/playlist' },
  ];
  const renderedLinks = links.map((link) => {
    return (
      <Link key={link.label} to={link.path} className="mb-2 cursor-pointer">
        {link.label}
      </Link>
    );
  });
  return (
    <div className={twMerge(defaultStyle, className)}>{renderedLinks}</div>
  );
};
