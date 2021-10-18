import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// 
import PrivateLayout from './layouts/PrivateLayout';
import Inicio from './pages/admin/Index';
import Productos from './pages/admin/Productos';
import RegVenta from './pages/admin/RegVenta';
import VerVenta from './pages/admin/VerVenta';
import Usuarios from './pages/admin/Usuarios';
import PublicLayout from './layouts/PublicLayout';
import Index from './pages/Index';
import LoginLayout from './layouts/LoginLayout';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            path={[
              '/inicio',
              '/inicio/productos',
              '/inicio/regventa',
              '/inicio/verventa',
              '/inicio/usuarios',
            ]}
          >
            <PrivateLayout>
              <Switch>
                <Route path="/inicio/productos">
                  <Productos />
                </Route>
                <Route path="/inicio/regventa">
                  <RegVenta />
                </Route>
                <Route path="/inicio/verventa">
                  <VerVenta />
                </Route>
                <Route path="/inicio/usuarios">
                  <Usuarios />
                </Route>
                <Route path="/inicio">
                  <Inicio />
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path={['/login']}>
            <LoginLayout>
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
              </Switch>
            </LoginLayout>
          </Route>
          <Route path={['/']}>
            <PublicLayout>
              <Route path="/">
                <Index />
              </Route>
            </PublicLayout>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
