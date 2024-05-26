import { useEffect, useState } from 'react';
import ImagesList from '../components/ImagesList';
import SearchBar from '../components/SearchBar';
import { searchImages } from '../services/searchImages';

const Home = ({ onSaveFavorite }) => {
  const [apiResult, setApiResult] = useState(null);

  const handleSubmit = (term) => {
    console.log('Hey from the Parent component', term);
    searchImages(term).then((r) => setApiResult(r));
  };

  // useEffect(() => {
  //   searchImages('random').then((r) => setApiResult(r));
  // }, []);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <section className="mt-4">
        <ImagesList props={{ apiResult, onSaveFavorite }} />
      </section>
    </>
  );
};

export default Home;
