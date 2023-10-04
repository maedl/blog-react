import { Link } from 'react-router-dom';
import { IArticlesSummary } from '../services/articleService';

interface props {
  articles: IArticlesSummary[];
}

export const ArticlesList = ({ articles }: props) => {
  return (
    <>
      {articles.map((article) => (
        <div className="single-articles-container" key={article._id}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <Link to={`/article/${article._id}`}>Read</Link>
        </div>
      ))}
    </>
  );
};
