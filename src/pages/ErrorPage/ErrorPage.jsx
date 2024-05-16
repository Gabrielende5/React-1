import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
    // Função do react de navegação entre rotas

function ErrorPage() {
  const isLogged = useSelector((state =>state.user.isLogged));
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogged == false){
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <h1> A Página não foi encontrada </h1>
      <h4> <Link to='/'>Voltar para a pagina inicial</Link></h4>
    </div>
  )
}

export default ErrorPage
