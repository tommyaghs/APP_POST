import React from 'react';
import { Card} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { openPost } from '../features/posts/openPostSlice';
import { Link } from 'react-router-dom';
import { CardProps } from '../app/interfaces';


const CardComponent: React.FC<CardProps> = ({ post }) => {
  const dispatch = useDispatch();

  const handleOpenPost = () => {
    dispatch(openPost(post));
  };

  return (
    <Card className='h-100' style={{ width: '18rem' }}>
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title className='text-center'>{post.title}</Card.Title>
        <Card.Text className='text-center'>{post.body}</Card.Text>
        <Link to={`/post/${post.id}`} onClick={handleOpenPost} 
        className="btn btn-primary no-hover-effect align-self-center nav-link">
          Vai al post</Link>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
