import React, { useState, useEffect } from 'react';
import '../styles/PrivateCss/FormUsuario.css';
// import {TextInput} from 'evergreen-ui';
import { TextInput , TextInputField , Select , option } from 'evergreen-ui';
//
function FormUsuarios() {
  const [formUsuarios, setFormUsuarios] = useState({});



  const handleChange = (e) => {
    setFormUsuarios({
      ...formUsuarios,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('El Formulario se ha enviado');
    console.log({formUsuarios})
  };

  return (
    <>
      <section className="sectionFormUsuario">
        <div>
          <h1>Nuevo Miembro</h1>
        </div>
        <form className="formDentroUsuario" onSubmit={handleSubmit}>
          <p>Datos Persona</p>
          <TextInput
            name="idUsuario"
            type="number"
            value={formUsuarios.idUsuario}
            onChange={handleChange}
            placeholder="Identificacion del usuario"
            // style={{ width: '70%' }}
          />
          <TextInput
            name="nombre"
            placeholder="Nombre del Usuario"
            onChange={handleChange}
            type="text"
            value={formUsuarios.nombre}
            // style={{ width: '40%' }}
          />
          <TextInput
            type="text"
            name="apellido"
            placeholder="Apellido del Usuario"
            value={formUsuarios.apellido}
            onChange={handleChange}
            // style={{ width: '40%' }}
          />
          <TextInput
            type="number"
            value={formUsuarios.celular}
            name="celular"
            placeholder="Celular del Usuario"
            onChange={handleChange}
            // style={{ width: '40%' }}
          />
          <p>Datos de la Cuenta</p>
          <TextInput
            name="correo"
            placeholder="Correo Electronico"
            type="email"
            value={formUsuarios.correo}
            onChange={handleChange}
            // style={{ width: '70%' }}
          />
          <TextInput
            name="contraseña"
            placeholder="Contraseña"
            type="password"
            value={formUsuarios.contraseña}
            onChange={handleChange}
            // style={{ width: '70%' }}
          />
          <p>Privilegios del Usuario</p>
          <Select name="privilegios" onChange={handleChange} defaultValue="">
            <option value="">--</option>
            <option value="vendedor">Vendedor</option>
            <option value="Administrador">Administrador</option>
          </Select>
          <TextInput type="submit" />
        </form>
      </section>
    </>
  );
}

export default FormUsuarios
