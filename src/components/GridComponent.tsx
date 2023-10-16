import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';
import { AppDispatch, RootState } from '../app/store';
import { Post } from '../app/interfaces';
import { PropagateLoader } from 'react-spinners';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardComponent from './CardComponent';
import PaginationComponent from './PaginationComponent'; 

function GridComponent() {
  const dispatch: AppDispatch = useDispatch();
  const { data: posts, status, error } = useSelector((state: RootState) => state.posts);
  const searchQuery = useSelector((state: RootState) => state.search);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangeItemsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };
  // search
  useEffect(() => {
    dispatch(fetchPosts({ start: 0, limit: 50, title: searchQuery }));
  }, [dispatch, searchQuery]);

  const filteredPosts = searchQuery ? posts.filter((post: Post) => post.title.includes(searchQuery)) : posts;

  // Inizio e fine pagina
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Per filtrare i post
  const postsToShow = filteredPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
<div className='mt-5'>
  <div className='container'>
    <div className='row justify-content-end mt-5'>
          <h2 className='text-center'>Gli ultimi Post</h2>
      <div className='col-lg-2'>
        <select className='mb-4 form-select w-100 custom-dropdown' value={itemsPerPage} onChange={handleChangeItemsPerPage}>
          <option value={5}>5 elementi</option>
          <option value={10}>10 elementi</option>
          <option value={20}>20 elementi</option>
        </select>
      </div>
    </div>
  </div>
  
      {
    status === 'loading' ? (
      <PropagateLoader className='text-center' color="rgba(0, 0, 0, 1)" />
    ) : status === 'failed' ? (
      <p>Error: {error}</p>
    ) : (
      <Row xs={1} md={5} className="g-4 ms-2 me-2">
        {postsToShow.map((post: Post) => (
          <Col key={post.id}>
            <CardComponent post={post} />
          </Col>
        ))}
      </Row>
    )
  }
  <PaginationComponent
    currentPage={currentPage}
    totalPages={totalPages}
    handlePageChange={handlePageChange}
  />
    </div >
  );
}

export default GridComponent;
