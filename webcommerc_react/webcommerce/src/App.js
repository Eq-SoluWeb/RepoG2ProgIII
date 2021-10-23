import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import FormVentas from './pages/FormVentas'
import GestionClientes from './pages/GestionClientes';
import GestionVendedor from './pages/GestionVendedor'
import Home from './pages/Home'
import Productos from './pages/Productos';
import VerVentas from './pages/VerVentas';
import Layout from './layout/Layout';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <nav/>
      <Router>
        <Layout>
          <Switch  witch>
            <Route path="/FormVentas">
              <FormVentas />
            </Route>
            <Route path="/GestionClientes">
              <GestionClientes />
            </Route>
            <Route path="/GestionVendedor">
              <GestionVendedor />
            </Route>
            <Route path="/Inicio">
              <Home />
            </Route>
            <Route path="/Productos">
              <Productos />
            </Route>
            <Route path="/VerVentas">
              <VerVentas />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Layout>
        {/* <Switch> */}
        {/* </Switch> */}
      </Router>
    </div>
  );
}


export default App;
