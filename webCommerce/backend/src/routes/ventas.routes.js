
const express = require('express');
const router = express.Router();
const app=express();
const React=require('react');
const venta = require('../models/ventas');
const ReactDOMServer=require('react-dom/server');
 

router.get('/', async(req, res) => {
    const ventas = await venta.find();
    
     res.json(ventas);
});
router.get('/:id', async(req, res) => {
    const ventas = await ventas.findById(req.params.id);
    res.json(ventas);
});
router.post('/', async(req, res) => {
    console.log(req.body);
    const { factura, fecha, cliente, nombre_cliente,direccion_cliente,valor_venta,codigo_vendedor } = req.body;
    const ventas = new venta({factura, fecha, cliente, nombre_cliente,direccion_cliente,valor_venta,codigo_vendedor });
    await ventas.save();
    
});

router.put('/:id', async(req, res) => {
    const { factura, fecha, cliente, nombre_cliente,direccion_cliente,valor_venta} = req.body;
    const newventa = {factura, fecha, cliente, nombre_cliente,direccion_cliente,valor_venta };
    await venta.findByIdAndUpdate(req.params.id, newventa);
    res.json({ status: 'venta Actualizada' });
});

router.delete('/:id', async(req, res) => {
    await venta.findByIdAndRemove(req.params.id);
    res.json({ status: 'venta Eliminado' });
})

module.exports = router;