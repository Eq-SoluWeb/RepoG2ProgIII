import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/PublicCss/PublicLayout.css';

const PublicLayout = ({ children }) => {
  return (
    <div className="contPublica">
      <div>
        <Navbar />
      </div>
      <div className="mainPublic">
        {children}
      </div>
      <div className="footerPublic">
        <Footer />
      </div>
    </div>
  );
};

export default PublicLayout;
