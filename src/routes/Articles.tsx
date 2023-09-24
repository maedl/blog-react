import { Link } from 'react-router-dom';
import { mockArticles } from '../models/IArticle';

export const Articles = () => {
  return (
    <div className="flex-container">
      <h1>Articles</h1>
      <div className="articles-container">
        {mockArticles.map((article) => (
          <div className="single-articles-container" key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <Link to={`/article/${article.id}`}>Read</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
