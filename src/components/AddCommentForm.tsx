import { useState } from 'react';
import { addComment } from '../services/articleService';
import { IComment } from '../models/IComment';
import { IArticle } from '../models/IArticle';

interface props {
  article: IArticle | undefined;
  setArticle: (article: IArticle) => void;
}

export const AddCommentForm = ({ article, setArticle }: props) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!article) return;
    console.log('Submitted');
    setName('');
    setText('');
    const comment: IComment = { author: name, text };
    console.log(article._id);
    const newComments = await addComment(comment, article._id);
    if (newComments) {
      setArticle({ ...article, comments: newComments });
    }
  };

  return (
    <div>
      <h3>Share your insights with a comment</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Name </label>
        <input
          type="text"
          id="author"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="text">Comment</label>
        <br />
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
