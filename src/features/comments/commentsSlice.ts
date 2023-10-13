import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CommentsState = { [postId: number]: string[] };

const initialState: CommentsState = {};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<{ postId: number; text: string }>) => {
      const { postId, text } = action.payload;
      if (!state[postId]) {
        state[postId] = [];
      }
      state[postId].push(text);
    },
  },
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
