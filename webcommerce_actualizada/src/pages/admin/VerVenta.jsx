import React from 'react';
import '../../styles/PrivateCss/verVentasProductos2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from 'reactstrap';

const data = [
  {
    id: 1,
    precio: '$1000',
    fecha: '08/10/2021',
    productos: '10',
    cliente: 'Carlos',
    idCliente: '001',
    encargado: 'Raul',
  },
];

class VerVenta extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: '',
      precio: '',
      fecha: '',
      productos: '',
      cliente: '',
      idCliente: '',
      encargado: '',
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].precio = dato.precio;
        arreglo[contador].fecha = dato.fecha;
        arreglo[contador].productos = dato.productos;
        arreglo[contador].cliente = dato.cliente;
        arreglo[contador].idCliente = dato.idCliente;
        arreglo[contador].encargado = dato.encargado;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm(
      'Estás Seguro que deseas Eliminar el elemento ' + dato.id
    );
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
        <Container className="body">
          <br />
          <div>
            <h1 className="table-title">Formulario de Ventas</h1>
          </div>
          <Button color="success" onClick={() => this.mostrarModalInsertar()}>
            Crear
          </Button>
          <br />
          <br />
          <table class="table-fill">
            <thead>
              <tr>
                <th class="text-left">ID</th>
                <th class="text-left">Precio</th>
                <th class="text-left">Fecha</th>
                <th class="text-left">Productos</th>
                <th class="text-left">Cliente</th>
                <th class="text-left">ID Cliente</th>
                <th class="text-left">Encargado</th>
                <th class="text-left">Acción</th>
              </tr>
            </thead>

            <tbody class="table-hover">
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td class="text-left">{dato.id}</td>
                  <td class="text-left">{dato.precio}</td>
                  <td class="text-left">{dato.fecha}</td>
                  <td class="text-left">{dato.productos}</td>
                  <td class="text-left">{dato.cliente}</td>
                  <td class="text-left">{dato.idCliente}</td>
                  <td class="text-left">{dato.encargado}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                      className="Button-Form"
                    >
                      Editar
                    </Button>{' '}
                    <Button
                      color="danger"
                      onClick={() => this.eliminar(dato)}
                      className="Button-Form"
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div>
              <h3>Editar Registro</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>

            <FormGroup>
              <label>Precio:</label>
              <input
                className="form-control"
                name="precio"
                type="number"
                onChange={this.handleChange}
                value={this.state.form.precio}
              />
            </FormGroup>

            <FormGroup>
              <label>Fecha</label>
              <input
                className="form-control"
                name="fecha"
                type="date"
                onChange={this.handleChange}
                value={this.state.form.fecha}
              />
            </FormGroup>

            <FormGroup>
              <label>Productos</label>
              <input
                className="form-control"
                name="productos"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.productos}
              />
            </FormGroup>

            <FormGroup>
              <label>Cliente</label>
              <input
                className="form-control"
                name="cliente"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.cliente}
              />
            </FormGroup>

            <FormGroup>
              <label>ID Cliente</label>
              <input
                className="form-control"
                name="idCliente"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.idCliente}
              />
            </FormGroup>

            <FormGroup>
              <label>Encargado</label>
              <input
                className="form-control"
                name="encargado"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.encargado}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button color="danger" onClick={() => this.cerrarModalActualizar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Insertar Venta</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length + 1}
              />
            </FormGroup>

            <FormGroup>
              <label>Precio:</label>
              <input
                className="form-control"
                name="precio"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Fecha:</label>
              <input
                className="form-control"
                name="fecha"
                type="date"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Productos:</label>
              <input
                className="form-control"
                name="productos"
                type="numbers"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Cliente:</label>
              <input
                className="form-control"
                name="cliente"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>ID Cliente:</label>
              <input
                className="form-control"
                name="idCliente"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Encargado:</label>
              <input
                className="form-control"
                name="encargado"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}>
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default VerVenta;
