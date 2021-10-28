const express = require('express');
const router = express.Router();
const app=express();
const React=require('react');
const Usuarios = require('../models/usuarios');
const ReactDOMServer=require('react-dom/server');


router.get('/', async(req, res) => {
    const usuarios = await Usuarios.find();

     res.json(usuarios);
});
router.get('/:id', async(req, res) => {
    const usuario = await Usuarios.findById(req.params.id);
    res.json(usuario);
});
router.post('/', async(req, res) => {
    console.log(req.body);
    const { login, nombre, email, rol, estado } = req.body;
    const usuario = new Usuarios({ login, nombre, email, rol, estado });
    await usuario.save();
   // res.json({ status: 'Usuario Guardado' });
});

router.put('/:id', async(req, res) => {
    const { login, nombre, email, rol, estado } = req.body;
    const newUsuario = { login, nombre, email, rol, estado };
    await Usuarios.findByIdAndUpdate(req.params.id, newUsuario);
    res.json({ status: 'Usuario Actualizado' });
});

router.delete('/:id', async(req, res) => {
    await Usuarios.findByIdAndRemove(req.params.id);
    res.json({ status: 'Usuario Eliminado' });
})

module.exports = router;