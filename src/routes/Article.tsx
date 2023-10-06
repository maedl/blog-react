import { useParams } from 'react-router-dom';
import { IArticle } from '../models/IArticle';
import { NotFound } from './NotFound';
import { useEffect, useState } from 'react';
import { getArticleById, likeArticle } from '../services/articleService';
import { CommentsList } from '../components/CommentsList';

export const Article = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState<IArticle | null>(null);
  const [alreadyLiked, setAlreadyLiked] = useState(false);

  useEffect(() => {
    const getData = async () => {
      if (!articleId) return;

      const fetchedArticle: IArticle | null = await getArticleById(articleId);
      setArticle(fetchedArticle);
    };

    getData();
  }, [articleId]);

  const handleLikeClick = async () => {
    // todo: stop liking if already liked, even after component (or even page) reload
    if (alreadyLiked) return;

    console.log('Like clicked');
    const newLikeAmount: number | undefined = await likeArticle(articleId);
    if (newLikeAmount !== undefined && article) {
      setArticle({ ...article, likes: newLikeAmount });
      setAlreadyLiked(true);
    }
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
        <div>{`${article.likes} ${
          article.likes === 1 ? 'like' : 'likes'
        }`}</div>
        <button onClick={handleLikeClick}>Like</button>
        <CommentsList comments={article?.comments} />
      </article>
    </div>
  );
};
