import { useReducer } from 'react';
import { createContext } from 'react';
import { getRandomMovie, getRandomSong } from '../utils/random_pick';

const playlistContext = createContext();

const ADD_RANDOM_SONG = 'add-random-song';
const ADD_RANDOM_MOVIE = 'add-random-movie';
const RESET_LIST = 'reset-list';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_RANDOM_SONG:
      const song = getRandomSong();
      const update_songs = [...state.songs]; //.push(movie);
      update_songs.push(song);

      return { ...state, songs: update_songs };
    case ADD_RANDOM_MOVIE:
      const movie = getRandomMovie();
      const update_movies = [...state.movies]; //.push(movie);
      update_movies.push(movie);

      return { ...state, movies: update_movies };
    case RESET_LIST:
      return { ...state, movies: [], songs: [] };
    default:
      break;
  }
};

function PlaylistProvider({ children }) {
  const INIT_PLAYLIST = { songs: [], movies: [] };
  const [state, dispatch] = useReducer(reducer, INIT_PLAYLIST);

  const values = {
    state,
    dispatch,
    triggers: { ADD_RANDOM_SONG, ADD_RANDOM_MOVIE, RESET_LIST },
  };
  return (
    <playlistContext.Provider value={values}>
      {children}
    </playlistContext.Provider>
  );
}

export { PlaylistProvider };
export default playlistContext;
