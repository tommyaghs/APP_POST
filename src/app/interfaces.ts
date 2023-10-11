//interfaccia Post
export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  
export interface RootState {
    posts: {
      data: Post[]; // Assicurati di avere un tipo Post
      status: string;
      error: string | null;
    };
  }
  