import React from 'react'
import "./Favorito.css"
import { useLoaderData } from 'react-router-dom'
import AnimeCard from '../AnimeCard/AnimeCard'

function Favorito() {
    const{data}=useLoaderData();
  return (
    <div>
      <div className='anime-cards'>
        {data.map((a) => (<AnimeCard key={a.mal_id} {...a}></AnimeCard>))}
            {/* o {...a} significa que quer que retorne todos os animes */}
      </div>
    </div>
  )
}

export default Favorito
