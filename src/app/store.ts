import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/posts/postsSlice';
import searchReducer from '../features/search/searchSlice';
import openPostReducer from '../features/posts/openPostSlice'; 

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    search: searchReducer,
    openPost: openPostReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
