import { IComment } from '../models/IComment';

interface props {
  comments: IComment[];
}

export const CommentsList = ({ comments }: props) => {
  return (
    <>
      <h3>Comments</h3>
      {comments.length === 0 && <p>No comments yet</p>}
      {comments.map((comment, i) => (
        <div key={i}>
          <h4>{comment.author}</h4>
          <p>{comment.text}</p>
        </div>
      ))}
    </>
  );
};
