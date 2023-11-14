import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Favorite from './pages/favorite';
import Home from './pages/home';
import LayoutPage from './components/layout/main-layout';
import NoPage from './pages/not_found';
import Todo from './pages/todo';

//Rewrite as an arrow function
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
