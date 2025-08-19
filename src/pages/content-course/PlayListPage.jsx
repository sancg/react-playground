import Playlist from '../../components/content-course/playlist';
import usePlaylistReducer from '../../hooks/usePlaylistReducer';
import { addSong } from '../../store';
import { useSelector, useDispatch } from 'react-redux';

export default function PlayListPage() {
  const songs = useSelector((state) => state.songs);

  const { state, dispatch, triggers } = usePlaylistReducer();
  const reduxDispatch = useDispatch();

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
        data={songs}
        actions={{ dispatch: reduxDispatch, add_random: addSong.toString() }}
      />
    </>
  );
}
