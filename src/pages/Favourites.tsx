import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavourites } from '../features/favourites/favouritesSlice';
import CardComponent from '../components/CardComponent';
import { RootState } from '../app/store';
import { Col, Row } from 'react-bootstrap';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Favourites = () => {
  const dispatch = useDispatch();
  const favouritePosts: IPost[] = useSelector((state: RootState) => state.favourites.items);

  const handleRemoveFromFavorites = (post: IPost) => {
    dispatch(removeFromFavourites({ id: post.id }));
  };

  return (
    <div className='mt-5 text-center'>
      <h2>Post Preferiti</h2>
      <div className='row g-4 ms-2 me-2'>
        {favouritePosts.length === 0 ? (
          <h3 className='mt-5 pt-5'>Nessun post aggiunto ai preferiti</h3>
        ) : (
          <Row xs={1} md={5} className="g-4 ms-2 me-2">
            {favouritePosts.map((post) => (
              <Col key={post.id} post={post}>
                <CardComponent post={post}>
                  <button onClick={() => handleRemoveFromFavorites(post)}>
                    Remove from Favorites
                  </button>
                </CardComponent>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default Favourites;
