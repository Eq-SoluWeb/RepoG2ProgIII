
const express = require('express');
const router = express.Router();
const app=express();
const React=require('react');
const Producto = require('../models/productos');
 

router.get('/', async(req, res) => {
    const productos = await Producto.find();
    
     res.json(productos);
});
router.get('/:id', async(req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
});
router.post('/', async(req, res) => {
    console.log(req.body);
    const { identificador, descripcion, precio, estado } = req.body;
    const producto = new Producto({ identificador, descripcion, precio, estado });
    await producto.save();
   // res.json({ status: 'Producto Guardado' });
});

router.put('/:id', async(req, res) => {
    const { identificador, descripcion, precio, estado } = req.body;
    const newProducto = { identificador, descripcion, precio, estado };
    await Producto.findByIdAndUpdate(req.params.id, newProducto);
    res.json({ status: 'Producto Actualizado' });
});

router.delete('/:id', async(req, res) => {
    await Producto.findByIdAndRemove(req.params.id);
    res.json({ status: 'Producto Eliminado' });
})

module.exports = router;