import { useParams } from 'react-router-dom';
import { IArticle } from '../models/IArticle';
import { NotFound } from './NotFound';
import { useEffect, useState } from 'react';
import { getArticleById } from '../services/articleService';

export const Article = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState<IArticle | null>(null);

  useEffect(() => {
    const getData = async () => {
      if (!articleId) return;

      const fetchedArticle: IArticle | null = await getArticleById(articleId);
      setArticle(fetchedArticle);
    };

    getData();
  }, [articleId]);

  const handleLikeClick = () => {
    console.log('Like clicked');
  };

  if (!article) {
    return <NotFound componentType={'article'} />;
  }

  return (
    <div className="flex-container">
      <h1>{article?.title}</h1>
      <article>
        {article?.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        <button onClick={handleLikeClick}>Like</button>
      </article>
    </div>
  );
};
