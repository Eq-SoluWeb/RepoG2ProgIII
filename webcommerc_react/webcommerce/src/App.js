import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './layout/Layout';
import Layout2 from './layout/Layout2';
import FormVentas from './pages/FormVentas';
import GestionClientes from './pages/GestionClientes';
import GestionVendedor from './pages/GestionVendedor';
import Home from './pages/Home';
import Productos from './pages/Productos';
import VerVentas from './pages/VerVentas';
<<<<<<< HEAD
import Layout from './layout/Layout';
import Nav from './components/Nav';
=======

>>>>>>> 28976e2a3a669d836f268e163dad469cdd80a92d

function App() {
  return (
    <div>
      <nav/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Layout2>
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
          </Layout2>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
