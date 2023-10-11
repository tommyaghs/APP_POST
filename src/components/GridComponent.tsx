import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice'; // Assicurati di specificare il percorso corretto al tuo slice dei post.
import { RootState } from '../app/store'; // Assicurati di specificare il percorso corretto al tuo store Redux.
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Post } from '../app/interfaces';
import PostCard from './PostCard';

function GridComponent() {
  const dispatch: any = useDispatch();
  const { data: posts, status, error } = useSelector((state: RootState) => state.posts);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const handleChangeItemsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(parseInt(event.target.value));
  };
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div className='mt-5'>
      {/* Dropdown per selezionare il numero di elementi da visualizzare */}
      <div className='row'>
        <select className='mb-5 col-lg-2' value={itemsPerPage} onChange={handleChangeItemsPerPage}>
          <option value={5}>5 elementi per pagina</option>
          <option value={10}>10 elementi per pagina</option>
          <option value={20}>20 elementi per pagina</option>
        </select>
        <h1 className='col-lg-8 text-center me-2 mb-3'>Gli ultimi Post</h1>
      </div>

      {
        status === 'loading' ? (
          <p>Loading...</p>
        ) : status === 'failed' ? (
          <p>Error: {error}</p>
        ) : (
          <Row xs={1} md={5} className="g-4">
            {posts.slice(0, itemsPerPage).map((post: Post) => (
              <Col key={post.id}>
                <PostCard post={post} />
              </Col>
            ))}
          </Row>
        )}
    </div>
  );
}

export default GridComponent;