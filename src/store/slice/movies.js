import { createSlice } from '@reduxjs/toolkit';
import { getRandomMovie } from '../../utils/random_pick';
import { reset } from '../action/reset';

const movies = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    addMovie(state) {
      state.push(getRandomMovie());
    },
    removeMovie(state, action) {
      state.splice(action.payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(reset, () => []);
  },
});

export const { addMovie, removeMovie } = movies.actions;
export const moviesReducer = movies.reducer;
