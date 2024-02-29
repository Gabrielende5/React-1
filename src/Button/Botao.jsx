import React from 'react'
import './Botao.css'
function Botao(props){ //props = poder mudar o icone e o texto 
    return (
        <div>
            <button onClick={props.tarefa} className={props.classe}>
                {props.children}
            </button>
        </div>
    )
}
export default Botao