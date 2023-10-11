import { createSlice } from '@reduxjs/toolkit';

const openPostSlice = createSlice({
  name: 'openPost',
  initialState: null,
  reducers: {
    openPost: (state, action) => {
      return action.payload;
    },
    closePost: (state) => {
      return null;
    },
  },
});

export const { openPost, closePost } = openPostSlice.actions;
export default openPostSlice.reducer;
