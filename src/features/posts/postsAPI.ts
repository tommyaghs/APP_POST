import axios from 'axios';

export const fetchPostsApi = async () => {
  try {
    const linkApi = "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=50";
    const response = await axios.get(linkApi);
    return response.data;
  } catch (error) {
    throw new Error('Errore nel fetch dei post');
  }
};
