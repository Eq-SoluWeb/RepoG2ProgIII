import React from 'react';
import { Link } from 'react-router-dom';
// import LoginRender from '../components/LoginRender'
// import {LoginButton} from '../components/Login';
import '../css//login.css'
import Imagenes from '../assets/Imagenes';
// import 'css/font-awesome-4.7.0/css/font-awesome.min.css';
// import 'https://fonts.googleapis.com/icon?family=Material+Icons';

function Login() {
  return (
    <>
      <section>
        <div className="container">
          <div className="user signinBx">
            <div className="imgBx">
              <img src={Imagenes[12].img} alt="Imagen Login"/>
            </div>
            <div className="formBx">
              <form action="/Inicio">
                <h2>Ingresar</h2>
                <input type="email" placeholder="Correo Electronico" required />
                <input type="password" placeholder="Contraseña" required />
                <div className="containerButtons">
                  <input type="submit" value="Ingresar" />
                  <div>
                    <Link to="#" className="googleLoginButton">
                      Ingresa con Google{' '}
                      <i
                        className="fa fa-google fa-2x"
                        style={{ paddingLeft: '6px' }}
                      ></i>
                    </Link>
                  </div>
                </div>

                <p className="signup">
                  ¡ Ingresa y gestiona tus Ventas de la mejor manera !
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      {function myFunction() {
        document.getElementById('demo').innerHTML = 'Venta';
      }}
    </>
  );
}

export default Login;
