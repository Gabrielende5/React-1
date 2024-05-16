import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from '../../Redux/Slice/UserSlice'
import { useNavigate } from 'react-router-dom'
import "./LoginPage.css";

function LoginPage() {
    const [user, setUser] = useState({ name: "", password: "" });
        
    const dispatch = useDispatch();
    const navigate = useNavigate();
        // Biblioteca de navegação

    const loginUser = (e) => {
        e.preventDefault();
            // Não deixa a pagina atualizar enquanto estiver no formulário
        dispatch(userActions.setName(user.name));
        dispatch(userActions.toggleLogged());
            // Aparece que está logado 
        navigate("/");
            // Ou seja, levar para a pagina home
    }

    return (
        <div className='loginPage'>
            <form id="formUser" onSubmit={loginUser}>
                <label htmlFor='nameUser' className='margin-form'> {""} Nome</label>
                <input type='text' value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })}></input>
                    {/* "SetUser" para mudar o nome quando logado */}
                
                <label htmlFor='passwordUser' className='margin-form'> {""} Senha</label>
                <input type='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}></input>

                <button type='submit' id='buttonForm' className='margin-form'> Logar </button>
            </form>
        </div>
    )
}

export default LoginPage