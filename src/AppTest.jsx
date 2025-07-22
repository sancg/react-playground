import Route from './components/contentCourse/navigation/Route';
import DropdownPage from './pages/content-course/DropdownPage';
import { Sidebar } from './components/ui/Sidebar';
import { Layout } from './components/layout/Layout';
import ModalPage from './pages/content-course/ModalPage';
import DatatablePage from './pages/content-course/DatatablePage';

export const AppTest = () => {
  return (
    <Layout>
      <Sidebar className="" />
      <div className="col-span-5 p-2">
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <DatatablePage />
        </Route>
      </div>
    </Layout>
  );
};
