import React, { useEffect, useState } from 'react'
import { useApiAnimeData } from '../../hooks/getAPIDATA';
import AnimeCard from '../../Components/AnimeCard/AnimeCard';
import Popup from '../../Components/Popup/Popup';
import "./AnimePage.css"


function AnimePage() {
    const [animeName, setAnimeName] = useState("one punch");
    const [animeDigitado, setAnimeDigitado] = useState ("one punch");
    const {animeData, loading, error} = useApiAnimeData(animeName);
    {/* pegando o anime digitado */}
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState({message: "", color:""});

    const hadleInputChange = (e)=>{ 
        setAnimeDigitado(e.target.value);
    } 
    function BuscarOAnime(){
        setAnimeName(animeDigitado);
    }
    useEffect(() =>{
       if(!loading){
        if(error){
            showAndHidePopup(`Error: ${error}`, "warning");
        } else{
            showAndHidePopup("Animes coletados com sucesso","success");
        }
       }
    }, [loading,error,animeData]); {/*Padrão do useEffect e React colocar os parametros que usou */}
    function showAndHidePopup(message, color){
        setPopupContent({message, color}); {/* Essa variavel que muda a cor e a mensagem do popup */}
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3500); {/* 3500 = 3,5 segundos aparecendo na tela  */}
    }
  return (
    <div className='form-anime'>
        <div className='form'>
            <input type="text" placeholder='Enter anime name' value={animeDigitado} onChange={hadleInputChange}></input>
            <button onClick={()=>BuscarOAnime}>Pesquisar</button>  {/* "()=>BuscarOAnime" = ao clicar tem a função de buscar os animes */}
        </div>
        {loading && <div> Loading ...</div>} {/* se der loading: ... */}
        {error && <div> Error:{error} </div>} {/* se der error: ... */}
        <div>
        {Array.isArray(animeData)?( 
            <div className='anime-cards'> {/* o Array pega todos os animes da API e o map filtrar com base no id e retorna o título do anime e a imagem */}
                {animeData.map((a)=>(<AnimeCard  key={a.mal_id}{...a}></AnimeCard>))}
            </div>
        ) : (animeData && <div> Sem nenhum anime </div>) 
        }

        {
            showPopup ? (<Popup message = {popupContent.message} color={popupContent.color}/>): null
            // "?" = if / ":" = else
        }
        </div>
       

    </div>
  )
}

export default AnimePage
