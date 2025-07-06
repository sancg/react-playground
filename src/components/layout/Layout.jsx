import React from 'react';

export const Layout = ({ children }) => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-2 h-full">
      {children}
    </div>
  );
};
