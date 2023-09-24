import { mockArticles } from '../models/IArticle';
import { ArticlesList } from '../components/ArticlesList';

export const Articles = () => {
  return (
    <div className="flex-container">
      <h1>Articles</h1>
      <div className="articles-container">
        <ArticlesList articles={mockArticles} />
      </div>
    </div>
  );
};
