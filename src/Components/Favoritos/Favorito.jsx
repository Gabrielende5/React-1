import React, { useEffect } from 'react'
import "./Favorito.css"
import { useLoaderData, useNavigate } from 'react-router-dom'
import AnimeCard from '../AnimeCard/AnimeCard'
import { useSelector } from 'react-redux';

function Favorito() {
    const{data}=useLoaderData();

    const isLogged = useSelector((state =>state.user.isLogged));
    const navigate = useNavigate();
    useEffect(() => {
      if (isLogged == false){
      navigate("/login");
      }
    }, []);
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
