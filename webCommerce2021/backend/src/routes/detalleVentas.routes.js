const express = require('express');
const router = express.Router();
const app=express();
const React=require('react');
const DetalleVentas = require('../models/Detalleventas');
const ReactDOMServer=require('react-dom/server');
 

router.get('/', async(req, res) => {
    const detalleventas = await DetalleVentas.find();
    
     res.json(detalleventas);
});
router.get('/:id', async(req, res) => {
    const detalleventas = await DetalleVentas.findById(req.params.id);
    res.json(detalleventas);
});
router.post('/', async(req, res) => {
    console.log(req.body);
    const { factura, codigobarra, cantidad, Precio, subtotal } = req.body;
    const detalleventas = new DetalleVentas({ factura, codigobarra, cantidad, precio, subtotal });
    await detalleventas.save();
   // res.json({ status: 'Detalle de Ventas Guardado' });
});

router.put('/:id', async(req, res) => {
    const { factura, codigobarra, cantidad, Precio, subtotal } = req.body;
    const newDetalleVentas = { factura, codigobarra, cantidad, precio, subtotal };
    await DetalleVentas.findByIdAndUpdate(req.params.id, newDetalleVentas);
    res.json({ status: 'Detalle de ventas Actualizado' });
});

router.delete('/:id', async(req, res) => {
    await DetalleVentas.findByIdAndRemove(req.params.id);
    res.json({ status: 'Detalle de ventas Eliminado' });
})

module.exports = router;