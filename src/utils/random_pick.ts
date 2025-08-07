const korean_songs = [
  '비처럼 음악처럼',
  '사랑했어요',
  '넋두리',
  '추억 만들기',
  '떠나가 버렸네',
  '소녀',
];

const movies = [
  'Exhumana',
  'Parasite',
  'Forgotten',
  'Pandora',
  'The negotiation',
  'Uprising',
  'Space Sweepers',
];

const randomRange = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min) + min);
};

// IMPROVE: I got duplicate code depending on the random Array I'd like to get the result from
function getRandomSong() {
  const index = randomRange(0, korean_songs.length - 1);
  return korean_songs[index];
}

function getRandomMovie() {
  const index = randomRange(0, movies.length - 1);
  return movies[index];
}

export { getRandomSong, getRandomMovie };
