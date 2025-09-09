import { configureStore, createAction, createSlice } from '@reduxjs/toolkit';
import { getRandomMovie, getRandomSong } from '../utils/random_pick';

export const reset = createAction('app/reset');

const songs = createSlice({
  name: 'songs',
  initialState: [],
  reducers: {
    addSong(state) {
      const song = getRandomSong();
      state.push(song);
    },
    removeSong(state, action) {
      state.splice(action.payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(reset, () => {
      return [];
    });
  },
});

const movies = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    addMovie(state) {
      const movie = getRandomMovie();
      state.push(movie);
    },
    removeMovie(state, action) {
      state.splice(action.payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(reset, () => []);
  },
});

const store = configureStore({
  reducer: {
    songs: songs.reducer,
    movies: movies.reducer,
  },
});

export default store;

export const { addSong, removeSong } = songs.actions;
export const { addMovie, removeMovie } = movies.actions;
