import React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { openPost } from '../features/posts/postsSlice';
import { addToFavourites, removeFromFavourites } from '../features/favourites/favouritesSlice';
import { CardProps } from '../app/interfaces';
import { RootState } from '../app/store';
import { IPost } from '../pages/Favourites';
import { Link } from 'react-router-dom';

const CardComponent: React.FC<CardProps> = ({ post }) => {
  const dispatch = useDispatch();
  const favouritePosts: IPost[] = useSelector((state: RootState) => state.favourites.items);
  const isFavorite = favouritePosts.some((favouritePost) => favouritePost.id === post.id);
  
  const handleRemoveFromFavourites = () => {
    if (isFavorite) {
      dispatch(removeFromFavourites({ id: post.id }));
    }
  };
  const handleAddToFavourites = () => {
    if (!isFavorite) {
      dispatch(addToFavourites(post));
    }
  };
  const handleOpenPost = () => {
    dispatch(openPost(post));
  };

  return (
    <Card className='glass h-100 rounded card-animation card' style={{ width: '18rem' }}>
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title className='text-center'>{post.title}</Card.Title>
        <Card.Text className='text-center'>{post.body}</Card.Text>
        <Link to={`/post/${post.id}`} onClick={handleOpenPost} className="btn btn-primary no-hover-effect align-self-center nav-link">
          Leggi di più
        </Link>
      </Card.Body>
      {isFavorite ? (
        <button onClick={handleRemoveFromFavourites} className="text-danger btn ms-auto mb-3 me-3">
          Rimuovi dai Preferiti
        </button>
      ) : (
        <button onClick={handleAddToFavourites} className="text-danger btn ms-auto mb-3 me-3">
          <i className="bi bi-heart"></i>
        </button>
      )}
    </Card>
  );
};

export default CardComponent;
