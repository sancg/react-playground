import { useState } from 'react';
import NotFound from './pages/NotFound';
import Route from './components/navigation/Route';
import DropdownPage from './pages/DropdownPage';
import { Sidebar } from './components/ui/Sidebar';
import { Layout } from './components/layout/Layout';

export const AppTest = () => {
  return (
    <Layout>
      <Sidebar className="" />
      <div className="col-span-5 p-2">
        <Route path="/">
          <DropdownPage />
        </Route>
      </div>
    </Layout>
  );
};
