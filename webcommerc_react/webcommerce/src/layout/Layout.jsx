import Nav from '../components/Nav';
import Notificaciones from '../components/Notificaciones';
import Imagenes from '../assets/Imagenes';

import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <Notificaciones />
      <Nav />
      {/* <!-- pageContent --> */}
      <section class="full-width pageContent">
        {/* <!-- navBar --> */}
        <div class="full-width navBar">
          <div class="full-width navBar-options">
            <i class="zmdi zmdi-swap btn-menu" id="btn-menu"></i>
            <div class="mdl-tooltip" for="btn-menu">
              Hide / Show MENU
            </div>
            <nav class="navBar-options-list">
              <ul class="list-unstyle">
                <li class="btn-Notification" id="notifications">
                  <i class="zmdi zmdi-notifications"></i>
                  <div class="mdl-tooltip" for="notifications">
                    Notificationes
                  </div>
                </li>
                <li class="btn-exit" id="btn-exit">
                  <i class="zmdi zmdi-power"></i>
                  <div class="mdl-tooltip" for="btn-exit">
                    Salir
                  </div>
                </li>
                <li class="text-condensedLight noLink">
                  <small>Nombre Usuario</small>
                </li>
                <li class="noLink">
                  <figure>
                    <img
                      src={Imagenes[3].img}
                      alt="Avatar"
                      class="img-responsive"
                    />
                  </figure>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section class="full-width pageContent">
        {/* <!-- navBar --> */}
        <div class="full-width navBar">
          <div class="full-width navBar-options">
            <i class="zmdi zmdi-swap btn-menu" id="btn-menu"></i>
            <div class="mdl-tooltip" for="btn-menu">
              Hide / Show MENU
            </div>
            <nav class="navBar-options-list">
              <ul class="list-unstyle">
                <li class="btn-Notification" id="notifications">
                  <i class="zmdi zmdi-notifications"></i>
                  <div class="mdl-tooltip" for="notifications">
                    Notificationes
                  </div>
                </li>
                <li class="btn-exit" id="btn-exit">
                  <i class="zmdi zmdi-power"></i>
                  <div class="mdl-tooltip" for="btn-exit">
                    Salir
                  </div>
                </li>
                <li class="text-condensedLight noLink">
                  <small>Nombre Usuario</small>
                </li>
                <li class="noLink">
                  <figure>
                    <img
                      src={Imagenes[3].img}
                      alt="Avatar"
                      class="img-responsive"
                    />
                  </figure>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <section class="full-width text-center" style={{ padding: '40px 0' }}>
          {children}
        </section>
      </section>
    </>
  );
};

export default Layout;
