const {producto}=require('../models/productos')

getAllProducts=(req,res)=>{
    producto.find().exec((error,products))
}