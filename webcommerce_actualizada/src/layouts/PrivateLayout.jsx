import React from 'react'
import Sidebar from '../components/Sidebar'


function PrivateLayout({children}) {
    return (
    <div>
      <div>
        <Sidebar />
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}

export default PrivateLayout
