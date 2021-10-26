import Nav from '../components/Nav';

import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <section class="full-width pageContent">
        <section class="full-width text-center" style={{ padding: '10px 0' }}>
          {children}
        </section>
      </section>
    </>
  );
};

export default Layout;
