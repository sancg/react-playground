import { useReducer } from 'react';
import Playlist from '../../components/content-course/playlist';
import { getRandomSong, getRandomMovie } from '../../utils/random_pick';

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
export default function PlayListPage() {
  const [state, dispatch] = useReducer(reducer, { songs: [], movies: [] });

  return (
    <>
      <button className="p-2" onClick={() => dispatch({ type: RESET_LIST })}>
        Reset Both
      </button>
      <Playlist
        title={'Movie Playlist'}
        data={state.movies}
        actions={{ dispatch, ADD_RANDOM_MOVIE }}
      />
      <hr />
      <Playlist
        title={'Song Playlist'}
        data={state.songs}
        actions={{ dispatch, ADD_RANDOM_SONG }}
      />
    </>
  );
}
