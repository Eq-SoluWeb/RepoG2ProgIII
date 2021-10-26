const mongoose = require('mongoose');

const { Schema } = mongoose;

const DetalleVentasSchema = new Schema({
    factura: { type: Number, required: true },
    codigobarra: { type: String, required: true },
    cantidad: { type: Number, required: true },
    precio:{ type:Number, required: true },
    subtotal:{ type: Number, required: true }
    
});

module.exports = mongoose.model('DetalleVentas', VentasSchema);