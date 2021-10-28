
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
    const venta = await venta.findById(req.params.id);
    res.json(venta);
});
router.post('/', async(req, res) => {
    console.log(req.body);
    const { identificador_venta, fecha, cliente, valor_venta } = req.body;
    const venta = new venta({ identificador, descripcion, precio, estado });
    await venta.save();
    
});

router.put('/:id', async(req, res) => {
    const { identificador_venta, fecha, cliente, valor_venta} = req.body;
    const newventa = { identificador_venta, fecha, cliente, valor_venta };
    await venta.findByIdAndUpdate(req.params.id, newventa);
    res.json({ status: 'venta Actualizada' });
});

router.delete('/:id', async(req, res) => {
    await venta.findByIdAndRemove(req.params.id);
    res.json({ status: 'venta Eliminado' });
})

module.exports = router;