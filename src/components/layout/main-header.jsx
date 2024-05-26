import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './main-header.module.css';
import { PresentationChartBarIcon } from '@heroicons/react/20/solid';

const Header = () => {
  return (
    <header
      className={
        classes.navigation + ' max-w-7xl xl:mx-auto xl:w-full xl:p-0 sm:m-0'
      }
    >
      <NavLink to="/">
        <PresentationChartBarIcon className="w-5" />
      </NavLink>

      <nav className="">
        <ul className="flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'text-cyan-400' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="favorite"
              className={({ isActive }) => (isActive ? 'text-cyan-400' : '')}
            >
              Favorite
            </NavLink>
          </li>
          <li>
            <NavLink
              to="todo"
              className={({ isActive }) => (isActive ? 'text-cyan-400' : '')}
            >
              Todos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
