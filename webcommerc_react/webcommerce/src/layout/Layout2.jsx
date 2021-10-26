import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Menu.css'
const Layout2 = ({ children }) => {
  return (
    <>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <label class="logo">Nombre</label>
        <ul>
          <li>
            <Link class="Link active" to="/Inicio">
              Inicio
            </Link>
          </li>
          <li>
            <Link class="Link" to="/GestionVendedor">
              Gestion V.
            </Link>
          </li>
          <li>
            <Link class="Link" to="/GestionClientes">
              Gestion C.
            </Link>
          </li>
          <li>
            <Link class="Link" to="/Productos">
              Productos
            </Link>
          </li>
          <li>
            <Link to="/FormVentas">Form Ventas</Link>
          </li>
          <li>
            <Link to="/VerVentas">Ver Ventas</Link>
          </li>
          <li>
            <Link to="/">Salir</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default Layout2;
