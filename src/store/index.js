import { configureStore, createSlice } from '@reduxjs/toolkit';
import { getRandomSong } from '../utils/random_pick';

const songs = createSlice({
  name: 'songs',
  initialState: [],
  reducers: {
    addSong(state) {
      const song = getRandomSong();
      state.push(song);
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songs.reducer,
  },
});

export default store;
export const { addSong } = songs.actions;
