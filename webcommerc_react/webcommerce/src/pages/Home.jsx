import React from 'react';

function home() {
  return (
    <>
      <h3 class="text-center tittles">SISTEMA DE VENTAS</h3>
      {/* <!-- Tiles --> */}
      <article class="full-width tile">
        <div class="tile-text">
          <span class="text-condensedLight">
            2<br />
            <small>Administratores</small>
          </span>
        </div>
        <i class="zmdi zmdi-account tile-icon"></i>
      </article>
      <article class="full-width tile">
        <div class="tile-text">
          <span class="text-condensedLight">
            71
            <br />
            <small>Clientes</small>
          </span>
        </div>
        <i class="zmdi zmdi-accounts tile-icon"></i>
      </article>
      <article class="full-width tile">
        <div class="tile-text">
          <span class="text-condensedLight">
            121
            <br />
            <small>Productos</small>
          </span>
        </div>
        <i class="zmdi zmdi-washing-machine tile-icon"></i>
      </article>
      <article class="full-width tile">
        <div class="tile-text">
          <span class="text-condensedLight">
            47
            <br />
            <small>Ventas</small>
          </span>
        </div>
        <i class="zmdi zmdi-shopping-cart tile-icon"></i>
      </article>
    </>
  );
}

export default home;
