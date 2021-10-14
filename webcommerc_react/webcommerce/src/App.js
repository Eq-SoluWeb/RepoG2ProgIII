import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './layout/Layout';
import FormVentas from './pages/FormVentas';
import GestionClientes from './pages/GestionClientes';
import GestionVendedor from './pages/GestionVendedor';
import Home from './pages/Home';
import Productos from './pages/Productos';
import VerVentas from './pages/VerVentas';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Layout>
            <Route exact path="/FormVentas">
              <FormVentas />
            </Route>
            <Route exact path="/GestionClientes">
              <GestionClientes />
            </Route>
            <Route exact path="/GestionVendedor">
              <GestionVendedor />
            </Route>
            <Route exact path="/Inicio">
              <Home />
            </Route>
            <Route exact path="/Productos">
              <Productos />
            </Route>
            <Route exact path="/VerVentas">
              <VerVentas />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
