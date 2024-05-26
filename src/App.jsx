import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Home from './pages/home';
import Favorite from './pages/Favorite';
import LayoutPage from './components/layout/main-layout';
import Todo from './pages/todo';
import NotFound from './pages/NotFound';
import { useState } from 'react';

import favMockup from './data/mockup.json';

//Rewrite as an arrow function
const App = () => {
  const [fav, setFav] = useState(favMockup);

  const handleSaveFavorite = (item) => {
    setFav((prev) => {
      const idFound = prev.findIndex(({ id }) => id === item.id);
      if (idFound >= 0) return [...prev.toSpliced(idFound, 1)];

      return [...prev, item];
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<Home onSaveFavorite={handleSaveFavorite} />} />
        <Route
          path="/favorite"
          element={
            <Favorite
              props={{ favItems: fav, onSaveFavorite: handleSaveFavorite }}
            />
          }
        />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
