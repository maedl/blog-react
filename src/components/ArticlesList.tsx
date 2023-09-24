import { Link } from 'react-router-dom';
import { IArticle } from '../models/IArticle';

interface props {
  articles: IArticle[];
}

export const ArticlesList = ({ articles }: props) => {
  return (
    <>
      {articles.map((article) => (
        <div className="single-articles-container" key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <Link to={`/article/${article.id}`}>Read</Link>
        </div>
      ))}
    </>
  );
};
