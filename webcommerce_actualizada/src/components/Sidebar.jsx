import React from 'react';
// import ImagenLogo from './ImagenLogo';
import '../styles/PrivateCss/nav.css';
import { Link } from 'react-router-dom';
import Imagenes from '../assets/Imagenes';


const Sidebar = () => {
  return (
    <>
      <section class="full-width navLateral">
        <div class="full-width navLateral-bg btn-menu"></div>
        <div class="full-width navLateral-body">
          <div class="full-width navLateral-body-logo text-center tittles">
            <i class="zmdi zmdi-close btn-menu"></i> Menu
          </div>
          <figure class="full-width navLateral-body-tittle-menu">
            <div>
              <img src={Imagenes[3].img} alt="Avatar" class="img-responsive" />
            </div>
            <figcaption style={{ margin: '20px' }}>
              <span>
                Nombre completo del Aministrador
                <br />
                <small>Admin</small>
              </span>
            </figcaption>
          </figure>
          <nav class="full-width">
            <ul class="full-width list-unstyle menu-principal">
              <li class="full-width">
                <Link to="/inicio" class="full-width">
                  <div class="navLateral-body-cl">
                    <i class="zmdi zmdi-view-dashboard"></i>
                  </div>
                  <div class="navLateral-body-cr">INICIO</div>
                </Link>
              </li>
              <li class="full-width">
                <Link to="/inicio/usuarios" class="full-width">
                  <div class="navLateral-body-cl">
                    <i class="zmdi zmdi-face"></i>
                  </div>
                  <div class="navLateral-body-cr">VENDEDORES</div>
                </Link>
              </li>
              <li class="full-width divider-menu-h"></li>
              <li class="full-width">
                <Link to="/inicio/productos" class="full-width">
                  <div class="navLateral-body-cl">
                    <i class="zmdi zmdi-washing-machine"></i>
                  </div>
                  <div class="navLateral-body-cr">PRODUCTOS</div>
                </Link>
              </li>
              <li class="full-width divider-menu-h"></li>
              <li class="full-width">
                <Link to="/inicio/regventa" class="full-width">
                  <div class="navLateral-body-cl">
                    <i class="zmdi zmdi-shopping-cart"></i>
                  </div>
                  <div class="navLateral-body-cr">VENTAS</div>
                </Link>
              </li>
              <li class="full-width divider-menu-h"></li>
              <li class="full-width divider-menu-h"></li>
              <li class="full-width">
                <Link to="/inicio/verventa" class="full-width">
                  <div class="navLateral-body-cl">
                    <i class="zmdi zmdi-store"></i>
                  </div>
                  <div class="navLateral-body-cr">VER VENTAS</div>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="Logout">
            <Link to="/">
            <input type="checkbox" />
            </Link>
          </div>
        </div>
      </section>x
    </>
  );
};
export default Sidebar;
