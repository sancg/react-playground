import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './main-header';
import styles from './main-layout.module.css';

const LayoutPage = () => {
  return (
    <div className='flex flex-col m-0 h-[100dvh]'>
      <Header />
      <main className='flex-1'>
        <Outlet />
      </main>
      <footer className='relative bottom-0 w-full text-center p-4'>
        Created by santi cano ☕️
      </footer>
    </div>
  );
};

export default LayoutPage;
