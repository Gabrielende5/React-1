import React from 'react'
import "./HomePage.css"
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='home'>
        <div className='overlay'>
            <div className='card'>
            <h1>Dragon Ball</h1>
            <p>"Dragon Ball" é uma épica saga de aventura criada por Akira Toriyama, que segue a jornada de Son Goku, um jovem guerreiro com uma cauda de macaco e habilidades incríveis, enquanto ele explora o mundo em busca das místicas Esferas do Dragão. Com seus amigos leais, Goku enfrenta uma série de desafios, desde batalhas contra vilões poderosos até torneios de artes marciais, tudo enquanto protege o planeta Terra de ameaças cósmicas</p>
            <p>Ao longo da jornada, Goku e seus companheiros descobrem segredos sobre seu passado, desbloqueiam poderes ainda mais extraordinários e forjam laços que transcendem o tempo e o espaço. "Dragon Ball" é uma história sobre coragem, amizade e a busca pela superação pessoal, cativando gerações com sua ação vibrante, humor hilariante e personagens inesquecíveis.</p>
            <button><Link to='/anime' className='Link-to-anime'>Descubra mais</Link></button>
            </div>
        </div>
    </div>
  )
}

export default HomePage
