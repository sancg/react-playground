import React from 'react';

export const Panel = ({ children, className, ...rest }) => {
  return (
    <div
      className={
        'px-3 rounded-md shadow-md border border-slate-500 ' + className
      }
      {...rest}
    >
      {children}
    </div>
  );
};
