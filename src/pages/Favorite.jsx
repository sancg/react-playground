import ImagesList from '../components/ImagesList';

const Favorite = ({ props: { favItems, onSaveFavorite } }) => {
  console.log(favItems);
  return (
    <>
      <ImagesList props={{ favItems, onSaveFavorite }} />
    </>
  );
};

export default Favorite;
