import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPostsApi } from './postsAPI';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const data = await fetchPostsApi();
  return data;
});


const postsSlice = createSlice({
  name: 'posts',
  initialState: { data: [], status: 'idle', error: null as string | null },
  reducers: {},
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
        state.error = action.error.message as string | null;
      });
  },
});

export default postsSlice.reducer;
