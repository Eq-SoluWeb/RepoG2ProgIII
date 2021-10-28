const express=require('express');
const morgan=require('morgan');
const path=require('path');
const {mongoose}=require('./database');
const app=express();
//Settings
app.set('port',process.env.PORT ||3000);

//Middleware
app.use(morgan('dev')); //muestra lo que se hace en el browser
app.use(express.json()); //reemplaza a body-parser

// Routes
app.use('/api/productos',require('./routes/productos.routes'));

//staticFiles
app.use(express.static(path.join(__dirname,'public')));
//inicia el servidor
app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`);
});