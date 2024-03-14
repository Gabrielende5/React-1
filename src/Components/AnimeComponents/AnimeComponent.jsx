import React, { useState } from 'react'
import { useApiAnimeData } from '../../hooks/getAPIDATA';
import AnimeCard from '../AnimeCard/AnimeCard';


function AnimeComponent() {
    const [animeName, setAnimeName] = useState("one punch");
    const [animeDigitado, setAnimeDigitado] = useState ("one punch");
    const {animeData, loading, error} = useApiAnimeData(animeName);
    {/* pegando o anime digitado */}
    const hadleInputChange = (e)=>{ 
        setAnimeDigitado(e.target.value);
    } 
    function BuscarOAnime(){
        setAnimeName(animeDigitado);
    }

  return (
    <div>
        <input 
        type="text" 
        placeholder='Enter anime name' 
        value={animeDigitado} 
        onChange={hadleInputChange}>

        </input>
        <button onClick={()=>BuscarOAnime}>Pesquisar</button>  {/* "()=>BuscarOAnime" = ao clicar tem a função de buscar os animes */}
        {loading && <div> Loading ...</div>} {/* se der loading: ... */}
        {error && <div> Error:{error} </div>} {/* se der error: ... */}

        {Array.isArray(animeData)?( 
            <div className='anime-cards'> {/* o Array pega todos os animes da API e o map filtrar com base no id e retorna o título do anime e a imagem */}
                {animeData.map((a)=>(<AnimeCard key={a.mal_id}{...a}></AnimeCard>))}
            </div>
        ) : (animeData && <div> Sem nenhum anime </div>) 
        }

    </div>
  )
}

export default AnimeComponent
