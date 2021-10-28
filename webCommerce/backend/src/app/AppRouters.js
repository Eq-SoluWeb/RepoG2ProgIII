import React from "react";
import { BrowserRouter,Route,Switch }  from 'react-router-dom';
import Ventas from "../pages/PageVentas";
import Productos from "../pages/PageProducto";
import NotFound from "../pages/NotFound";
import TopNav from "../components/TopNav";
 

function AppRouters(){
   
    return (
     
        <BrowserRouter>
        <Switch>     
          <Route exact path="/ventas"><Ventas/></Route> 
          <Route exact path="/productos" component={Productos}/>
          <Route exact path="/" component={Productos}/>
          <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
    )
}
export default AppRouters;