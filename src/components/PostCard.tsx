import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Post } from '../app/interfaces';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Button variant="primary">Vai al post</Button>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
