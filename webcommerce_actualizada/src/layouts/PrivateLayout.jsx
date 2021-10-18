import React from 'react'
import Sidebar from '../components/Sidebar'

// import '../styles/PrivateCss/nav.css'
// import '../styles/PrivateCss/Logout.css';
// import '../styles/PrivateCss/MaterialDesing.css';
import '../styles/PrivateCss/SidebarSimple.css';


function PrivateLayout({children}) {
    return (
      // <div className="layoutPrivate">
      //   <div className="reactanguloSide">
      //     <Sidebar />
      //   </div>
      //   <div className="contenido">
      //       {children}
      //   </div>
      // </div>
      <div className="layoutPrivate">
          <div className="rectanguloSide"></div>
        <div className="contenido">
          {children}
        </div>
      </div>
    );
}

export default PrivateLayout
