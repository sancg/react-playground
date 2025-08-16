import Playlist from '../../components/content-course/playlist';
import usePlaylistReducer from '../../hooks/usePlaylistReducer';

export default function PlayListPage() {
  const { state, dispatch, triggers } = usePlaylistReducer();
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
