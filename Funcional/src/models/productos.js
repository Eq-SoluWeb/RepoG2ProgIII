const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductosSchema = new Schema({
    identificador: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    estado: { type: String, required: true ,default: 'ACTIVO'}
});

module.exports = mongoose.model('Producto', ProductosSchema);