import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar'
    // Esse "Outlet" faz com que esse seja sempre repetido, tipo cada pagina vai ter o mesma navbar que estiver nesse Layout
function Layout() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  )
}

export default Layout
