import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '../../pages/Favourites';


interface FavouritesState {
    items: IPost[];
}
const initialState: FavouritesState = {
    items: [],
};
const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavourites: (state, action: PayloadAction<IPost>) => {
            state.items.push(action.payload);
        },
        removeFromFavourites: (state, action: PayloadAction<{ id: number }>) => {
            state.items = state.items.filter((post) => post.id !== action.payload.id);
        },
    },
});

export const { addToFavourites, removeFromFavourites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
