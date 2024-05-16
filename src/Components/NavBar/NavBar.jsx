import React from 'react'
import "./NavBar.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../../Redux/Slice/UserSlice';
    // Tudo que for usar as rotas precisa desse "Link"
import { FaUserCircle } from 'react-icons/fa';

function NavBar() {
  const isLogged = useSelector((state)=> state.user.isLogged);
  const name = useSelector((state) => state.user.name);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deslogar = () => {
    dispatch(userActions.toggleLogged());
    dispatch(userActions.setName(""));
    navigate('/');

  }

  return (
    <nav id='navbar'> 
      <div id='left-links'>
        <div><Link to='/'>Home</Link> </div> {/* Pode ser '' ou "" para um caminho */}
        <div><Link to='/anime'>Animes</Link></div>
        <div><Link to='/favorito'>Favorito</Link></div>
        <div><Link to='/notes'>Anotações</Link></div>
      </div>
      <div className=''>
        {isLogged ? 
          // Se estiver logado: 
        (
          <div id='infos'>
            <div className='space'>
              <div> <FaUserCircle color="cyan" fontSize={21}></FaUserCircle></div>
              <span id='nomeDoUser'>{name}</span>
              <div id='deslogarButton' onClick={() => deslogar()}>Deslogar</div>
            </div>
          </div>
        )
          // Se estiver deslogado:
        :(
          <div id='right-links'>
          <div><Link to="/login">Login</Link></div>
        </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
