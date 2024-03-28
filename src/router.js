// Aqui é onde ficara todas as rotas
import { createBrowserRouter } from "react-router-dom";
import AnimePage from "./pages/AnimePage/AnimePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./pages/Layout/Layout";

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
    ],errorElement: <ErrorPage></ErrorPage>
        // se digitar qualquer coisa diferente (ex: "/animes") vai para a pagina de erro
}])