import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { closePost } from '../features/posts/postsSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';
import { Post, UserData } from '../app/interfaces';
import { Link } from 'react-router-dom';
import CommentComponent from '../components/commentComponent';
import { fetchUserById } from '../features/users/usersSlice';

const PostPage = () => {
  const userData = useSelector((state: RootState) => state.users.userData) as UserData | null;
  const userStatus = useSelector((state: RootState) => state.users.status);
  const selectedPost = useSelector((state: RootState) => state.posts.openedPost) as Post | null;
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (selectedPost) {
      dispatch(fetchUserById(selectedPost.userId));
    }
  }, [dispatch, selectedPost]);

  if (selectedPost) {
    return (
      <section className='mt-5'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className="card glass">
                <div className='d-flex justify-content-end mt-3'>
                  <Link to='/'>
                    <button className='mx-5 btn btn-outline-white no-hover-effect' onClick={() => {
                      dispatch(closePost());
                    }}>
                      Chiudi Post
                    </button>

                  </Link>
                </div>
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
                      {userData && userStatus === 'succeeded' && (
                        <p className="text-muted small mb-0">User: {userData.name}</p>
                      )}
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
      </section>
    );
  };
  return null;
}

export default PostPage;
