import React,{Component} from 'react';
import {render} from 'react-dom';
import PageVentas from '../pages/PageVentas';
import App from './App';
import AppRouters from './AppRouters';
const contenedor=document.getElementById("app")

render(<AppRouters/>,contenedor)

