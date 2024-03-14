import { useEffect, useState } from 'react'
import  axios  from 'axios';
export function useApiAnimeData(anime) {
    const [animeData, setAnimeData] = useState(null); {/* verifica se os dados estão certos */}
    const [loading, setLoading] = useState(true); {/* verifica se está carregando */}
    const [error, setError] = useState(null) 
    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const searchInput = anime.toLowerCase();
                const formattedSearch = searchInput.replace(/\s+/g, "-");
                // Com esse /\s+ ... é possível o usuário usar potuação sem problema no código
                const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${formattedSearch}`);

                if (response.status === 200) { //erro estava aq Estava escrito Response 
                    setAnimeData(response.data.data);
                } else {
                    setError("Error anime data");
                }
            } 
            catch (err) { 
                setError(err.message);
                setLoading(false);
            }
            // o "catch" tem a função de mostrar o erro
            finally {
                setLoading(false);
            }
        } fetchData();
    }, [anime]);
    return {animeData,loading,error}
}

