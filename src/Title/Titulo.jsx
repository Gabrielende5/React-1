import React from 'react'
import './Titulo.css'
function Titulo(props){ //props = poder mudar o icone e o texto 
    return (
        <div>
            <h1 className={props.classe}>{props.children}</h1>
        </div>
    )
}
export default Titulo