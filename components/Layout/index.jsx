import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

import { LayoutContainer } from './LayoutElements';
const Layout = (props) => {
  return (
    <LayoutContainer>
      <Navigation />
      {props.children}
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
