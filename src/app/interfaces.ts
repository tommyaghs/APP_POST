//interfacce Post
export interface Post {
  id: number;
  userId: number; 
  title: string;
  body: string;
  comments?: Comment[]
}
export interface CardProps {
  post: Post;
  children?: React.ReactNode;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (newPage: number) => void;
}