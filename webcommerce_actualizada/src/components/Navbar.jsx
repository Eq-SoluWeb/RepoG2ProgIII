import React from 'react';
import { Link } from 'react-router-dom';
import Imagenes from '../assets/Imagenes';
import '../styles/PublicCss/Nav.css';

const Navbar = () => {
  return (
    <div class="topnav">
      <div class="contenedorNav">
        {/* <p> */}
          <Link className="Link" to="/">
            Soluweb
          </Link>
        {/* </p> */}
      </div>
      <div class="contenedorNav">
        {/* <p> */}
          <Link to="/login" className="Link" href="#news">
            Login
          </Link>
        {/* </p> */}
      </div>
    </div>
  );
};

export default Navbar;
