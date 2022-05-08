import React from 'react';
import Header from '~/layouts/Header';
import Sidebar from '~/layouts/Sidebar';

const Default = ({ children }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      {children}
    </div>
  );
};

export default Default;
