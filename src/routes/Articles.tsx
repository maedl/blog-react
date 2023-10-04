import { ArticlesList } from '../components/ArticlesList';
import {
  IArticlesSummary,
  getArticlesSummary,
} from '../services/articleService';
import { useEffect, useState } from 'react';

export const Articles = () => {
  const [articlesSummary, setArticlesSummary] = useState<IArticlesSummary[]>(
    []
  );

  useEffect(() => {
    const getData = async () => {
      console.log('Getting data');

      const articlesSummary = await getArticlesSummary();
      setArticlesSummary(articlesSummary);
    };
    getData();
  }, []);

  return (
    <div className="flex-container">
      <h1>Articles</h1>
      <div className="articles-container">
        <ArticlesList articles={articlesSummary} />
      </div>
    </div>
  );
};
