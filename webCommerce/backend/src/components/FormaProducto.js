import React,{Component} from 'react'
import { ReactDOM } from 'react-dom'

function FormaProducto(props)
{
  return(
 
   
    
<div className="container">
<div className="row">
    <div className="col s5">
         <div className="card z-depth-4">
             <div className="card-content">
                     <form onSubmit={this.addProducto}>
                         <div className="row">
                             <div className="input-field col s12">
                                 <input type="text" name="identificador"  value={this.state.identificador} onChange={this.handleChange} placeholder="Identificador"/>
                             </div>
                        
                             <div className="input-field col s12">
                                 <input type="text" name="descripcion" value={this.state.descripcion} onChange={this.handleChange}  placeholder="Descripción del Producto"/>
                             </div>
                         
                             <div className="input-field col s12">
                                 <input type="number"  name="precio" value={this.state.precio} onChange={this.handleChange} placeholder="Precio unitario"/>
                             </div>
                          
                             <div className="input-field col s12">
                             <select name="estado"  value={this.state.estado}onChange={this.handleChange}  >
                                 
                                 <option value="ACTIVO">Activo</option>
                                 <option value="INACTIVO">Inactivo</option>
                            </select>
                            <label>Estado del Producto</label>
                         </div>
                         
                         </div>
                         <button type="submit" className="btn light-blue darken-4">
                         Enviar
                         </button>
                     </form>
             </div>
         </div>
    </div>
</div>
</div>
  )
}
  export default FormaProducto