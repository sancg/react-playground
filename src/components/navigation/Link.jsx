import React from 'react';
import { useContext } from 'react';
import NavigationContext from '../../context/navigation';
import clsx from 'clsx';
export const Link = ({ to, children, className, ...rest }) => {
  const { navigate, currentPath } = useContext(NavigationContext);

  const baseStyle = 'text-blue-500';
  const activeStyle = {
    'font-bold border-l-4 border-blue-500 pl-2': currentPath === to,
  };

  const handleClick = (e) => {
    if (e.metaKey || e.ctrKey) {
      return;
    }
    e.preventDefault();

    navigate(to);
  };
  return (
    <a
      onClick={handleClick}
      className={clsx(baseStyle, className, activeStyle)}
      {...rest}
    >
      {children}
    </a>
  );
};
