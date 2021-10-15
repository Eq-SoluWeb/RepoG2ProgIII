import React from 'react';
import '../css/normalize.css';
import '../css/sweetalert2.css';
import '../css/MaterialDesing.css';
import '../css/materialmin.css';
import '../css/Custom.css';
import '../css/Custom.css';
import '../css/main.css';



import {Boton} from './ButtonLogout'
import '../css/Logout.css'

import Imagenes from '../assets/Imagenes';

// import 'ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js'
// import '../js/jquery1'
// // import '../js/jqueryCustom'
// import '../js/materialmin'
// import '../js/sweetalert2min'
// import '../js/main'

function Nav() {
  return (
    <>
      {/* <!-- navLateral --> */}
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
                <a href="home.html" class="full-width">
                  <div class="navLateral-body-cl">
                    <i class="zmdi zmdi-view-dashboard"></i>
                  </div>
                  <div class="navLateral-body-cr">INICIO</div>
                </a>
              </li>
              <li class="full-width">
                <a href="home.html" class="full-width">
                  <div class="navLateral-body-cl">
                    <i class="zmdi zmdi-face"></i>
                  </div>
                  <div class="navLateral-body-cr">VENDEDORES</div>
                </a>
              </li>
              <li class="full-width">
                <a href="home.html" class="full-width">
                  <div class="navLateral-body-cl">
                    <i class="zmdi zmdi-face"></i>
                  </div>
                  <div class="navLateral-body-cr">CLIENTES</div>
                </a>
              </li>
              <li class="full-width divider-menu-h"></li>
              <li class="full-width">
                <a href="products.html" class="full-width">
                  <div class="navLateral-body-cl">
                    <i class="zmdi zmdi-washing-machine"></i>
                  </div>
                  <div class="navLateral-body-cr">PRODUCTOS</div>
                </a>
              </li>
              <li class="full-width divider-menu-h"></li>
              <li class="full-width">
                <a href="sales.html" class="full-width">
                  <div class="navLateral-body-cl">
                    <i class="zmdi zmdi-shopping-cart"></i>
                  </div>
                  <div class="navLateral-body-cr">VENTAS</div>
                </a>
              </li>
              <li class="full-width divider-menu-h"></li>
              <li class="full-width divider-menu-h"></li>
              <li class="full-width">
                <a href="seeSales.html" class="full-width">
                  <div class="navLateral-body-cl">
                    <i class="zmdi zmdi-store"></i>
                  </div>
                  <div class="navLateral-body-cr">VER VENTAS</div>
                </a>
              </li>
            </ul>
          </nav>
          <div className="Logout">
            <input type="checkbox"/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nav;
