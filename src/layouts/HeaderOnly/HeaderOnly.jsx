import React from 'react';
import Header from '~/layouts/Header';

const HeaderOnly = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default HeaderOnly;
