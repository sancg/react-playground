import { searchImages } from '../services/searchImages';

const Home = () => {
  searchImages();
  return (
    <>
      <h1 className="">Home view</h1>
      <p>everything you want is in here</p>
    </>
  );
};

export default Home;
