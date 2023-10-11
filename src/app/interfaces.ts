//interfacce Post
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CardProps {
  post: Post;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (newPage: number) => void;
}