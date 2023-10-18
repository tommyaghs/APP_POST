import { combineReducers, configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/posts/postsSlice';
import searchReducer from '../features/search/searchSlice';
import favouritesReducer from '../features/favourites/favouritesSlice';
import commentsReducer from '../features/comments/commentsSlice';
import usersReducer from '../features/users/usersSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['posts', 'favourites', 'comments'],
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  counter: counterReducer,
  posts: postsReducer,
  search: searchReducer,
  favourites: favouritesReducer,
  comments: commentsReducer,
  users: usersReducer
}));

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const saveStateToLocalStorage = () => {
  try {
    const serializedState = JSON.stringify(store.getState());
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.log(err);
  }
};

export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const preloadedState = loadStateFromLocalStorage();
if (preloadedState) {
  store.dispatch({ type: 'HYDRATE', payload: preloadedState });
}

store.subscribe(() => {
  saveStateToLocalStorage();
});

