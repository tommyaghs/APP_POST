import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCommentsForPost } from '../features/comments/commentsSlice';
import { AppDispatch, RootState } from '../app/store';
import { PropagateLoader } from 'react-spinners';

import "./commentStyle.css"

interface Comment {
  id: number;
  name: string;
  body: string;
  email: string;
}

interface CommentComponentProps {
  postId: number;
}

const CommentComponent: React.FC<CommentComponentProps> = ({ postId }) => {
  const dispatch: AppDispatch = useDispatch();
  const comments: Comment[] = useSelector((state: RootState) => state.comments.comments);
  const status = useSelector((state: RootState) => state.comments.status);

  useEffect(() => {
    if (postId) {
      dispatch(fetchCommentsForPost(postId));
    }
  }, [dispatch, postId]);

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleAccordion = () => {
    setIsCollapsed(!isCollapsed);
  };

  if (status === 'loading') {
    return <PropagateLoader className='mx-auto' color="rgba(0, 0, 0, 1)" />;
  }
  if (status === 'failed') {
    return <p>Si è verificato un errore durante il recupero dei commenti.</p>;
  }
  if (comments.length === 0) {
    return <p>Nessun commento disponibile per questo post.</p>;
  }

  return (
    <div className="container bootstrap snippets bootdey">
      <div className="row">
        <div className="col-md-12">
          <div className="blog-comment">
            <div className='text-center'>
              <button className='btn btn-outline-white no-hover-effect' onClick={toggleAccordion}>
                {isCollapsed ? 'Mostra Commenti' : 'Nascondi Commenti'}
              </button>
            </div>
            <hr />
            <ul className="comments" style={{ display: isCollapsed ? 'none' : 'block' }}>
              {comments.map((comment) =>
                <li className={`comment ${comments.length - 1 ? 'comment-fade' : ''}`} key={comment.id}>
                  <img
                    className="rounded-circle shadow-1-strong me-3 avatar"
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                    alt="avatar"
                  />
                  <div className="post-comments card glass no-hover-effect">
                    <p className="meta">User: {comment.email}</p> <p>{comment.name}</p> says : <i className="pull-right"></i>
                    <p>{comment.body}</p>
                  </div>
                </li>
              )
              }
            </ul>
          </div>
        </div>
      </div>
    </div >
  );
};

export default CommentComponent;
