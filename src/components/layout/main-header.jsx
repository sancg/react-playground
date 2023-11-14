import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './main-header.module.css';

const Header = () => {
  return (
    <header className=''>
      <div>
        <NavLink to='/'>Logo</NavLink>
      </div>
      <nav>
        <ul className='flex'>
          <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-cyan-400' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='favorite' className={({ isActive }) => (isActive ? 'text-cyan-400' : '')}>
              Favorite
            </NavLink>
          </li>
          <li>
            <NavLink to='todo' className={({ isActive }) => (isActive ? 'text-cyan-400' : '')}>
              Todos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
