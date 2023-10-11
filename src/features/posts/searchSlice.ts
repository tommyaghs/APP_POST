// searchSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPostsApi } from './postsAPI';
import { Post } from '../../app/interfaces';


export const searchPostsByTitle = createAsyncThunk('search/searchPostsByTitle', async (searchTerm: string) => {
  const data = await fetchPostsApi();
  const filteredPosts = data.filter((post: Post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
  return filteredPosts;
});

const searchSlice = createSlice({
  name: 'search',
  initialState: { results: [], status: 'idle', error: null as string | null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchPostsByTitle.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchPostsByTitle.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.results = action.payload;
      })
      .addCase(searchPostsByTitle.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as string | null;
      });
  },
});

export default searchSlice.reducer;
