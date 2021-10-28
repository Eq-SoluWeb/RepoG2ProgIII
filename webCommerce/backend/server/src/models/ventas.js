const mongoose = require('mongoose');

const { Schema } = mongoose;

const VentasSchema = new Schema({
    identificador_venta: { type: String, required: true },
    fecha: { type: Date, required: true },
    cliente: { type: String, required: true },
    valor_venta:{type:Number,required:true }
    
});

module.exports = mongoose.model('Ventas', VentasSchema);