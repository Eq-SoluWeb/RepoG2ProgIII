import React,{Component} from 'react'
import { ReactDOM } from 'react-dom'

function TopNav(props)
{
  return(
 
    <div>
            <nav className="light-blue darken-4">
            <div className="container">
  
    <a className="brand-logo" href="/">FacturaWeb</a>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/productos">Productos</a></li>
        <li><a href="/ventas">Ventas</a></li>
        <li><a href="/clientes">Clientes</a></li>
        <li><a href="/usuarios">Usuarios</a></li>
      </ul>
   
  
  </div>
</nav>
<div className="container">
<p className="flow-text text-center">{props.titulo}</p>
</div>
</div>)
}
export default TopNav