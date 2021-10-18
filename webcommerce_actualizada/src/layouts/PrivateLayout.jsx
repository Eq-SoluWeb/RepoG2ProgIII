import React from 'react'
import Sidebar from '../components/Sidebar'

// import '../styles/PrivateCss/nav.css'
// import '../styles/PrivateCss/Logout.css';
// import '../styles/PrivateCss/MaterialDesing.css';
import '../styles/PrivateCss/SidebarSimple.css';


function PrivateLayout({children}) {
    return (
      // <div>
      //   <div>
      //     <Sidebar />
      //   </div>
      //   <div>
      //     <section
      //       className="text-center content"
      //       style={{ padding: '0', maring: '20px' }}
      //     >
      //       {children}
      //     </section>
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
