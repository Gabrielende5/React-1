import React from 'react'
import { Link } from 'react-router-dom'
    // Função do react de navegação entre rotas

function ErrorPage() {
  return (
    <div>
      <h1> A Página não foi encontrada </h1>
      <h4> <Link to='/'>Voltar para a pagina inicial</Link></h4>
    </div>
  )
}

export default ErrorPage
