import { configureStore } from '@reduxjs/toolkit';
import { reset } from './action/reset';
import { addSong, removeSong, songsReducer } from './slice/songs';
import { addMovie, moviesReducer, removeMovie } from './slice/movies';

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export default store;

export { reset, addSong, addMovie, removeSong, removeMovie };
