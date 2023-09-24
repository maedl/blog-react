import { useParams } from 'react-router-dom';
import { IArticle, mockArticles } from '../models/IArticle';

export const Article = () => {
  const { articleId } = useParams();

  const article: IArticle | undefined = mockArticles.find(
    (article) => article.id === articleId
  );

  return (
    <div className="flex-container">
      <h1>{article?.title}</h1>
      <article>
        {article?.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </article>
    </div>
  );
};
