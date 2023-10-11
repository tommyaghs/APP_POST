import React from 'react';
import { useSelector } from 'react-redux';
import { closePost } from '../features/posts/openPostSlice';
import { useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { Post } from '../app/interfaces';

function PostPage() {
  const selectedPost = useSelector((state: RootState) => state.openPost) as Post | null;
  const dispatch = useDispatch();

  if (!selectedPost) {
    return null;
  }

  return (
    <div className='mt-5 '>
      <h1 className='text-center mt-5'>{selectedPost.title}</h1>
      <p  className='text-center'>{selectedPost.body}</p>
      <button className='mx-5 btn btn-outline-dark' onClick={() => {
        dispatch(closePost());
        window.location.href = '/';
      }}>Chiudi Post</button>
    </div>
  );
}

export default PostPage;
