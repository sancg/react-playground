import { reset, addSong, removeSong, addMovie, removeMovie } from '../../store';
import { useSelector, useDispatch } from 'react-redux';

import Playlist from '../../components/content-course/playlist';

export default function PlayListPage() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);
  const movies = useSelector((state) => state.movies);

  return (
    <>
      <button className="p-2" onClick={() => dispatch(reset())}>
        Reset Both
      </button>
      <Playlist
        title={'Movie Playlist'}
        data={movies}
        actions={{ dispatch, add: addMovie(), remove: removeMovie }}
      />
      <hr />
      <Playlist
        title={'Song Playlist'}
        data={songs}
        actions={{ dispatch, add: addSong(), remove: removeSong }}
      />
    </>
  );
}
