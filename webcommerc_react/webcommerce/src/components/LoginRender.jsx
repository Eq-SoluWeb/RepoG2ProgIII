import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react';

const LoginRender = ({children}) => {
  return (
    <div>
      <>
        {/* Este provedor de Aut0 porvee metodos para loguear y desloguear a los usuarios. A demás que almaena el estado de autenticacion de los usuarios. */}
        <Auth0Provider
          domain="dev-60rcwdt0.us.auth0.com"
          clientId="Z2cr8dkCJktF0yR3WCmQW4xLzKxvHFGz"
          redirectUri={window.location.origin}
        >
          {children}
        </Auth0Provider>
      </>
    </div>
  );
}

export default LoginRender
