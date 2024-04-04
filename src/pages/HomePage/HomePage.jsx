import React from 'react'
import "./HomePage.css"
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='home'>
        <div className='overlay'>
            <div className='card'>
            <h1>Dragon Ball</h1>
            <p>ABCdfe</p>
            <p>PFG</p>
            <button><Link to='/anime' className='Link-to-anime'>Descubra</Link></button>
            </div>
        </div>
    </div>
  )
}

export default HomePage
