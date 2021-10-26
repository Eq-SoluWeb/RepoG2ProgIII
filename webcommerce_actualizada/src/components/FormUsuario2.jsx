import React, { Component } from 'react';
import '../styles/PrivateCss/FormUsuario2.css';
import {
  TextInput,
  TextInputField,
  Select,
  option,
  SelectField,
} from 'evergreen-ui';

class FormUsuario2 extends Component {
  state = {
    id: '',
    nombre: '',
    celular: '',
    email: '',
    contra: '',
    privilegio: '',
  };

  valueToState = ({ name, value, checked, type }) => {
    this.setState(() => {
      return { [name]: type === 'checkbox' ? checked : value };
    });
  };

  render() {
    return (
      <>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <form>
          <p>PUNTO UNO</p>
          <TextInputField
            label="ID"
            name="id"
            type="text"
            placeholder="Ingrese el ID"
            onChange={(event) => this.valueToState(event.target)}
          />

          <TextInputField
            label="NOMBRE"
            name="nombre"
            type="text"
            placeholder="Ingrese el nombre"
            onChange={(event) => this.valueToState(event.target)}
          />

          <TextInputField
            label="CELULAR"
            name="celular"
            type="number"
            placeholder="Ingrese el celular"
            onChange={(event) => this.valueToState(event.target)}
          />

          <p>Segundo Punto</p>
          <TextInputField
            label="EMAIL"
            name="email"
            type="text"
            placeholder="Ingrese el correo"
            onChange={(event) => this.valueToState(event.target)}
          />
          <TextInputField
            label="CONTRASEÑA"
            name="contra"
            type="text"
            placeholder="Ingrese la contraseña"
            onChange={(event) => this.valueToState(event.target)}
          />

          <p>Tercer Punto</p>
          {/* <label htmlFor="privilegio">Elige los privilegios</label>
          <Select
            name="privilegio"
            onChange={(event) => this.valueToState(event.target)}
          >
            <option value={''}>-Seleccione Uno-</option>
            <option value={'vendedor'}>Vendedor</option>
            <option value={'Administrador'}>Administrador</option>
          </Select> */}
          <SelectField
            name="privilegio"
            label="Seleccione los privilegios"
            onChange={(event) => this.valueToState(event.target)}
          >
            <option value={''} selected>
              -Seleccione Uno-
            </option>
            <option value={'vendedor'}>Vendedor</option>
            <option value={'administrador'}>Administrador</option>
          </SelectField>
        </form>
      </>
    );
  }
}

export default FormUsuario2;
