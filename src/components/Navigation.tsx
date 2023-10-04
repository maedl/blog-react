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
    path: '/articles',
    title: 'Articles',
  },
  {
    path: '/about',
    title: 'About me',
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
