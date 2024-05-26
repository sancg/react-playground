import ImagesList from '../components/ImagesList';
import SearchBar from '../components/SearchBar';
import { searchImages } from '../services/searchImages';

const Home = () => {
  const handleSubmit = (term) => {
    console.log('Hey from the Parent component', term);
  };
  //searchImages();
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <section className="mt-4">
        <ImagesList />
      </section>
    </>
  );
};

export default Home;
