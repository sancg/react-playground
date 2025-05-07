import React from 'react';
import { useContext } from 'react';
import NavigationContext from '../../context/navigation';

export const Link = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (e) => {
    e.preventDefault();

    navigate(to);
  };
  return <a onClick={handleClick}>{children}</a>;
};
