import React from 'react'
import GoogleLogin from 'react-google-login';
import '../style/Login.css'
import Imagenes from '../assets/Imagenes'

function Login() {
  const responseGoogle = (respuesta) => {
    console.log(respuesta);
    console.log(respuesta.profileObj);
  };

  return (
    <>
      <section className="sectionLogin">
        <div className="container">
          <div className="user signinBx">
            <div className="imgBx">
              <img src={Imagenes[12].img} alt="Imagen Login" />
            </div>
            <div className="formBx">
              <form action="/inicio">
                <h2>Ingresar</h2>
                <input type="email" placeholder="Correo Electronico" required />
                <input type="password" placeholder="Contraseña" required />
                <div className="containerButtons">
                  <input type="submit" value="Ingresar" />
                  <div>
                    <GoogleLogin
                      clientId="124730905327-odna3or1948u129rrogil5pngchijjvi.apps.googleusercontent.com"
                      buttonText="Iniciar Sesion"
                      // Este boton se personaliza
                      // render={(renderProps) => (
                      //   <button
                      //     onClick={renderProps.onClick}
                      //     disabled={renderProps.disabled}
                      //   >
                      //     This is my custom Google button
                      //   </button>
                      // )}
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={'single_host_origin'}
                    />
                    ,
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

export default Login
