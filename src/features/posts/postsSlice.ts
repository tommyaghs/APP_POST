import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface IpropApi {
  start: number;
  limit: number;
  title?: string;
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (props: IpropApi, thunkAPI) => {
  try {
    const linkApi = `https://jsonplaceholder.typicode.com/posts?_start=${props.start}&_limit=${props.limit}${props.title ? 
    `&title=${props.title}` : ''}`;
    const response = await axios.get(linkApi);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Errore nel fetch dei post');
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: { data: [], status: 'idle', error: null as string | null | undefined,  openedPost: null as string | null},
  reducers: {
    openPost: (state, action) => {
      state.openedPost = action.payload;
    },
    closePost: (state) => {
      state.openedPost = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string | null;
      });
  },
});


export const { openPost, closePost } = postsSlice.actions;
export default postsSlice.reducer;
