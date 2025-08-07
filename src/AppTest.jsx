import Route from './components/content-course/navigation/Route';
import DropdownPage from './pages/content-course/DropdownPage';
import { Sidebar } from './components/ui/Sidebar';
import { Layout } from './components/layout/Layout';
import ModalPage from './pages/content-course/ModalPage';
import DatatablePage from './pages/content-course/DatatablePage';
import CountPage from './pages/content-course/CountPage';
import PlayListPage from './pages/content-course/PlayListPage';
import { PlaylistProvider } from './context/usePlaylist';
export const AppTest = () => {
  return (
    <Layout>
      <Sidebar className="" />
      <div className="col-span-5 p-2">
        <Route path="/playlist">
          <PlaylistProvider>
            <PlayListPage />
          </PlaylistProvider>
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <DatatablePage />
        </Route>
        <Route path="/counter">
          <CountPage />
        </Route>
      </div>
    </Layout>
  );
};
