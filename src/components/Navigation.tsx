import { Link } from 'react-router-dom';

interface ILink {
  path: string;
  title: string;
}

const navLinks: ILink[] = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/about',
    title: 'About',
  },
  {
    path: '/articles',
    title: 'Articles',
  },
];

export const Navigation = () => {
  return (
    <nav>
      <ul>
        {navLinks.map((navItem) => (
          <li key={navItem.title}>
            <Link to={navItem.path}>{navItem.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
