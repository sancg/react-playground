import { useReducer } from 'react';
import Playlist from '../../components/content-course/playlist';
import { getRandomSong, getRandomMovie } from '../../utils/random_pick';
import { useContext } from 'react';
import playlistContext from '../../context/usePlaylist';

export default function PlayListPage() {
  const { state, dispatch, triggers } = useContext(playlistContext);
  return (
    <>
      <button
        className="p-2"
        onClick={() => dispatch({ type: triggers.RESET_LIST })}
      >
        Reset Both
      </button>
      <Playlist
        title={'Movie Playlist'}
        data={state.movies}
        actions={{ dispatch, add_random: triggers.ADD_RANDOM_MOVIE }}
      />
      <hr />
      <Playlist
        title={'Song Playlist'}
        data={state.songs}
        actions={{ dispatch, add_random: triggers.ADD_RANDOM_SONG }}
      />
    </>
  );
}
