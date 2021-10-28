const express = require('express');
const React=require('react');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');
const app = express();
//settings
app.set('port', process.env.PORT || 8000)

//Exposiocion del backend
const cors=require("cors");
app.use(cors());
//middleware
app.use(morgan('dev'));
app.use(express.json());
//routes
app.use('/api/productos', require('./routes/productos.routes'));
app.use('/api/ventas', require('./routes/ventas.routes'));
app.use('/api/usuarios', require('./routes/usuarios.routes'));
app.use('/api/detalle_ventas', require('./routes/detalleVentas.routes'));
//static files
app.use(express.static(path.join(__dirname, 'public')));
//starting the server
app.listen(app.get('port'), () => {

});