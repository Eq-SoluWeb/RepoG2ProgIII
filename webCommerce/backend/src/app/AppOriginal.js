import { json } from 'body-parser'
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import TopNav from '../components/TopNav'

class App extends  Component{
    constructor(){
        super();
        this.state= {
           
                identificador:'',
                descripcion:'',
                precio:'',
                estado:'ACTIVO',
                productos:[],
                _id:''
            
            
        };
        this.handleChange=this.handleChange.bind(this);
        this.addProducto=this.addProducto.bind(this);

    }
    componentDidMount(){
        this.fetchProductos();
    }
    fetchProductos(){
        fetch('/api/productos')
        .then(res=>res.json())
        .then(data=>{
         
            this.setState({productos:data});
        }
            
            )
    }
    deleteProducto(id){
        if(confirm('Está seguro de Eliminar este producto?')){
        fetch(`/api/productos/${id}`,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        M.toast({html:'Producto Eliminado exitosamente'});
        this.fetchProductos();
    }
        
    }
        handleChange (e){
            
            const{name,value}=e.target;
            this.setState({
                [name]:value
            });
            e.preventDefault();
        }

editProducto(id){
    fetch(`/api/productos/${id}`)
      .then(res=>res.json())
      .then(data=>{
          this.setState({
              _id:data._id,
              identificador:data.identificador,
              descripcion:data.descripcion,
              precio:data.precio,
              estado:data.estado
          })
      })
      
}

addProducto(e){
  if(this.state._id){
     fetch(`/api/productos/${this.state._id}`,{
     method :'PUT',
     body :JSON.stringify(this.state),
     headers :{
        'Accept':'application/json',
        'Content-Type':'application/json'
     }
    })
    .then(res=>res.json())
    .then(data=>{console.log(data)})
    this.fetchProductos();
  }
   else {
    fetch('/api/productos',{
        method:'POST',
        body: JSON.stringify(this.state),
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    })
    
    .then(res=>res.json())
    .then(data=>{
             this.setState({indentificador:'',
                        descripcion:'',
                        precio:0,
                        estado:'ACTIVO'});
    })
    .catch(err=>console.log(err));
    this.fetchProductos();
  
   }
       

}

    render(){
        return(
        <div>
            {/*Navegacion*/}
           <TopNav titulo='Productos'/>
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
               
                   <div className="col s7">
                   <table className="table">
                       <thead>
                           <tr>
                               <th>Identificador</th>
                               <th>Descripcion</th>
                               <th>Precio</th>
                               <th>Acciones</th>
                           </tr>
                       </thead>
                       <tbody>
                       {
                           this.state.productos.map(producto=>{
                               return(<tr key={producto._id}>
                                      <td>{producto.identificador}</td>
                                      <td>{producto.descripcion}</td>
                                      <td>{producto.precio}</td>
                                      <td>
                                         <button className="waves-effect waves-light btn"
                                         onClick={()=>this.editProducto(producto._id)}  ><i className="material-icons">
                                         edit</i>
                                         </button>
                                         <button style={{margin:'4px'}}
                                                 onClick={()=>this.deleteProducto(producto._id)} 
                                                 className="waves-effect waves-light btn" ><i className="material-icons">delete</i>
                                         </button>
                                      </td>
                                </tr>)
                           })
                       }
                           <tr>
                               <td scope="row"></td>
                               <td></td>
                               <td></td>
                           </tr>
                           <tr>
                               <td scope="row"></td>
                               <td></td>
                               <td></td>
                           </tr>
                       </tbody>
                   </table>
                   </div>
                   </div>
               </div>
            </div>
         
        )
    }
    }
export default App;