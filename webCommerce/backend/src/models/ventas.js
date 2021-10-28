const mongoose = require('mongoose');

const { Schema } = mongoose;

const VentasSchema = new Schema({
    factura: { type: Number, required: true },
    fecha: { type: Date, required: true },
    cliente: { type: String, required: true },
    nombre_cliente:{ type: String, required: true },
    direccion_cliente:{ type: String, required: true },
    codigo_vendedor:{ type: String, required: true },
    valor_venta:{type:Number,required:true }
    
});

module.exports = mongoose.model('Ventas', VentasSchema);