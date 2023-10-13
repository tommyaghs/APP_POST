import React from 'react';
import { useSelector } from 'react-redux';
import { closePost } from '../features/posts/openPostSlice';
import { useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { Post } from '../app/interfaces';
import { Link } from 'react-router-dom';
import CommentComponent from '../components/commentComponent';
const PostPage = () => {
  const selectedPost = useSelector((state: RootState) => state.openPost) as Post | null;
  const dispatch = useDispatch();

  if (selectedPost) {
    return (
      <section>
        <div className="container my-5 py-5">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className="card glass">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle shadow-1-strong me-3"
                      src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                      alt="avatar"
                      width="60"
                      height="60"
                    />
                    <div>
                      <h6 className="fw-bold text-dark mb-1">{selectedPost.title}</h6>
                      <p className="text-muted small mb-0">{selectedPost.id}</p>
                    </div>
                  </div>
                  <p className="mt-3 mb-4 pb-2">
                    {selectedPost.body}
                  </p>
                  <div className="small d-flex justify-content-start">
                  </div>
                </div>
                <CommentComponent postId={selectedPost.id} />
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-end mt-3'>
          <Link to='/'>
            <button className='mx-5 btn btn-outline-dark' onClick={() => {
              dispatch(closePost());
            }}>
              Chiudi Post
            </button>
          </Link></div>
      </section>
    );
  };
  return null;
}

export default PostPage;