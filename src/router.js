// Aqui é onde ficara todas as rotas
import { createBrowserRouter } from "react-router-dom";
import AnimePage from "./pages/AnimePage/AnimePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./pages/Layout/Layout";
import Favorito from "./Components/Favoritos/Favorito";

export const router = createBrowserRouter([{
    path: "/",
    element: <Layout></Layout>,
    children: [
        {
            path: "/",
            element: <HomePage></HomePage>
                // se n digitar nada vai para o home
        },
        {
            path: "/anime",
            element: <AnimePage></AnimePage>
                // se digitar " /anime" vai para os animes
        },
        {
            path: "/favorito",
            element: <Favorito></Favorito>,
                // se digitar " /favorito" vai para os favoritos
            loader: async () => { 
                // "async" = Lida com várias tarefas ao mesmo tempo
                return fetch (`https://api.jikan.moe/v4/anime?q=Dragon Ball Z`)
            }
        },

    ],errorElement: <ErrorPage></ErrorPage>
        // se digitar qualquer coisa diferente (ex: "/animes") vai para a pagina de erro
}])