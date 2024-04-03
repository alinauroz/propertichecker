import React from 'react';
import HeaderHome2 from './HeaderHome2';
import FooterTwo from '../FooterTwo/FooterTwo';

const AppLayout = ({ children }) => {
  return (
    <div>
      <HeaderHome2 />
      <div className="mt-4 mb-6 max-w-[1280px] mx-auto">
      {children}
      </div>
      <FooterTwo />
    </div>
  );
};

export default AppLayout;

