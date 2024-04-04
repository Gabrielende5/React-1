import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
    // Tudo que for usar as rotas precisa desse "Link"

function NavBar() {
  return (
    <nav id='navbar'> 
        <div><Link to='/'>Home</Link> </div>
        <div><Link to='/anime'>Animes</Link></div>
        <div><Link to='/favorito'>Favorito</Link></div>

    </nav>
  )
}

export default NavBar
