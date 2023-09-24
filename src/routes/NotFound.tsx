import { Link } from 'react-router-dom';

interface props {
  componentType: 'page' | 'article';
}

export const NotFound = ({ componentType }: props) => {
  return (
    <div className="flex-container">
      <h3>The {componentType} you are looking for seems to be missing.</h3>
      <Link to={'/'}>Back to Home</Link>
    </div>
  );
};
