
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import TopNav from '../components/TopNav'

class PageVentas extends  Component{
    constructor(){
        super();
        this.state= {
            identificador_venta:'',
            fecha:'',
            cliente:'',
            valor_venta:'0',
            ventas:[],
            _id:''
        
        
    };
        this.handleChange=this.handleChange.bind(this);
        this.addventa=this.addventa.bind(this);

    }
   
    componentDidMount(){
        this.fetchventas();
    }
    fetchventas(){
        fetch('/api/ventas')
        .then(res=>res.json())
        .then(data=>{
         
            this.setState({ventas:data});
        }
            
            )
    }
    deleteventa(id){
        if(confirm('Está seguro de Eliminar este venta?')){
        fetch(`/api/ventas/${id}`,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        M.toast({html:'venta Eliminado exitosamente'});
        this.fetchventas();
    }
        
    }
        handleChange (e){
            
            const{name,value}=e.target;
            this.setState({
                [name]:value
            });
            e.preventDefault();
        }

editventa(id){
    fetch(`/api/ventas/${id}`)
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

addventa(e){
  if(this.state._id){
     fetch(`/api/ventas/${this.state._id}`,{
     method :'PUT',
     body :JSON.stringify(this.state),
     headers :{
        'Accept':'application/json',
        'Content-Type':'application/json'
     }
    })
    .then(res=>res.json())
    .then(data=>{console.log(data)})
    this.fetchventas();
  }
   else {
    fetch('/api/ventas',{
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
    this.fetchventas();
  
   }
       

}

    render(){
        return(
        <div>
            {/*Navegacion*/}
           <TopNav titulo='Gestión de Ventas'/>
            <div className="container">
               <div className="row">
                   <div className="col s5">
                        <div className="card z-depth-4">
                            <div className="card-content">
                            <form  >
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="text" name="cliente"   placeholder="Nombre del cliente"/>
                                </div>
                           
                                <div className="input-field col s12">
                                    <input type="Date" name="fecha"    />
                                </div>
                            
                                <div className="input-field col s12">
                                    <input type="number"  name="identificador"  placeholder="Factura"/>
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
                               <th>fecha</th>
                               <th>cliente</th>
                               <th>Acciones</th>
                           </tr>
                       </thead>
                       <tbody>
                       {
                           this.state.ventas.map(venta=>{
                               return(<tr key={venta._id}>
                                      <td>{venta.identificador}</td>
                                      <td>{venta.fecha}</td>
                                      <td>{venta.cliente}</td>
                                      <td>
                                         <button className="waves-effect waves-light btn"
                                         onClick={()=>this.editventa(venta._id)}  ><i className="material-icons">
                                         edit</i>
                                         </button>
                                         <button style={{margin:'4px'}}
                                                 onClick={()=>this.deleteventa(venta._id)} 
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
export default PageVentas;