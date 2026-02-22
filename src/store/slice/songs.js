import { createSlice } from '@reduxjs/toolkit';
import { getRandomSong } from '../../utils/random_pick';
import { reset } from '../action/reset';

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

export const { addSong, removeSong } = songs.actions;
export const songsReducer = songs.reducer;
