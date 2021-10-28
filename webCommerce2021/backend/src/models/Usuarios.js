const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsuariosSchema = new Schema({
    login: { type: String, required: true },
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    rol:{ type:String, required: true },
    estado:{ type: String, required: true },
   
    
});

module.exports = mongoose.model('Usuarios', UsuariosSchema);