/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import Header from './header/header';
import Footer from './footer/footer';

export default function Layout({ children }) {
   
  return (
    <React.Fragment>
        <Header />
      <main id="content" sx={{ variant: 'layout.main', }} >
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}
