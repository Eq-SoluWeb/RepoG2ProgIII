import React, { useEffect, useState } from 'react';

export function Prueba() {
  const [edad, setEdad] = useState(0);
  const [esMenorDeEdad, setEsMenorDeEdad] = useState(false);
  const [mostrarCamposAdicionales, setMostrarCamposAdicionales] =
    useState(false);

  useEffect(() => {
    if (edad >= 18) {
      setEsMenorDeEdad(false);
    } else {
      setEsMenorDeEdad(true);
    }
  }, [edad]);

  return (
    <div>
      <form className="flex flex-col">
        <h2>Formulario de Creación de vehículos</h2>
        <label htmlFor="edad">
          Por favor ingrese su edad
          <input
            value={edad}
            onChange={(e) => {
              setEdad(e.target.value);
            }}
            className="border border-gray-600"
            name="edad"
            type="number"
          />
        </label>
        {esMenorDeEdad ? (
          <span className="text-3xl text-red-500">
            ¡Usted es menor de edad, no puede hacer pagos!
          </span>
        ) : (
          <span className="text-3xl text-green-500">
            ¡Usted es mayor de edad, sí puede hacer pagos!
          </span>
        )}
        <button
          onClick={() => setMostrarCamposAdicionales(!mostrarCamposAdicionales)}
          type="button"
          className="text-white bg-indigo-500"
        >
          Mostrar campos adicionales
        </button>
        {mostrarCamposAdicionales && (
          <div>
            <input
              className="border bg-gray-400 my-2 p-3"
              placeholder="dato nuevo"
              type="text"
            />
            <input
              className="border bg-gray-400 my-2 p-3"
              placeholder="dato nuevo"
              type="text"
            />
            <input
              className="border bg-gray-400 my-2 p-3"
              placeholder="dato nuevo"
              type="text"
            />
            <input
              className="border bg-gray-400 my-2 p-3"
              placeholder="dato nuevo"
              type="text"
            />
            <input
              className="border bg-gray-400 my-2 p-3"
              placeholder="dato nuevo"
              type="text"
            />
          </div>
        )}
      </form>
    </div>
  );
}


export function FormularioMelo() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.terminos === true) {
      alert('El Formulario se ha enviado');
    } else {
      alert('Acepte los terminos');
    }
  };

  return (
    <>
      <h2>Formularios</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        ></input>

        <p>ELIGE TU SABOR FAVORITO</p>
        <input
          type="radio"
          id="vainilla"
          name="sabor"
          value="vainilla"
          onChange={handleChange}
        ></input>
        <label htmlFor="">Vainilla</label>
        {/* ---- */}
        <input
          type="radio"
          id="chocolate"
          name="sabor"
          value="chocoate"
          onChange={handleChange}
        ></input>
        <label htmlFor="">Chocolate</label>
        {/* ---- */}
        <input
          type="radio"
          id="chispitas"
          name="sabor"
          value="chispotas"
          onChange={handleChange}
        ></input>
        <label htmlFor="">Chispitas</label>
        <p>ELIGE TU LENGUAJE FAVORITO</p>
        <select name="lenguajes" onChange={handleChange} defaultValue="">
          <option value="">--</option>
          <option value="react">React</option>
          <option value="mongo">Mongo</option>
          <option value="java">Java</option>
        </select>
        <br />
        <label>Acepto Terminos y Condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChecked}
        ></input>
        <br />
        <input type="submit"></input>
      </form>
    </>
  );
}