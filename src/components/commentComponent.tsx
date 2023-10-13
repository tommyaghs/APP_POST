import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { addComment } from '../features/comments/commentsSlice';

interface CommentComponentProps {
  postId: number;
}

const CommentComponent: React.FC<CommentComponentProps> = ({ postId }) => {
  const comments = useSelector((state: RootState) => state.comments[postId] || []);
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState('');
  const [username, setUsername] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const commentWithUsername = `${username}: ${newComment}`;
      dispatch(addComment({ postId, text: commentWithUsername }));
      setNewComment('');
    }
  };

  return (
    <div>
      <h4>Commenti</h4>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <div className="d-flex w-100">
        <img
          className="rounded-circle shadow-1-strong me-3"
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
          alt="avatar"
          width="40"
          height="40"
        />
        <div className="form-outline w-100">
          <input
            className="rounded glass mb-1"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Aggiungi un commento"
            className="form-control rounded glass"
            id="textAreaExample"
          />
          <label className="form-label" htmlFor="textAreaExample">
            Inserisci un commento e il tuo username
          </label>
        </div>
      </div>
      <div className="float-end mt-2 pt-1">
        <button
          onClick={handleAddComment}
          type="button"
          className="btn btn-sm glass text-dark mb-2 me-2"
        >
          Aggiungi Commento
        </button>
      </div>
    </div>
  );
};

export default CommentComponent;
