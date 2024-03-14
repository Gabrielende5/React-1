import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import functionSimples from './Exemplos/functionSimples';
import functionDupla from './Exemplos/functionDupla';
import Botao from './Button/Botao';
import Titulo from './Title/Titulo';

function AppExemplo() {
  // const (variavel, functionParaMudarValorDaVariavel) = useState("valor inicial");
  // "UseEffect" = muda o valor da variavel no html (renderiza na tela); "UseState" = muda o valor da variavel no codigo
  // "map" -> recebe uma lista e modifica esta com base no que está pedindo 
  // "Component" -> lata de tinta / "props" -> cor da tinta 
  
  const [useEffectCounter,SetUseEffectCounter] = useState(0);
  const [logado,setlogado]=useState(false); 
  useEffect(()=>{
    console.log("useEffect chamado");
    SetUseEffectCounter(useEffectCounter + 1)
  }, [logado])
  const Logar = () => {
    setlogado(true)
  }
  const Deslogar = () => {
    setlogado(false)
  }
  return (
    <div className='App'>
      functionSimples
      <h1> Use effect foi chamado {useEffectCounter} vezes </h1>
      {logado ? <p>Logado</p> : <p> Deslogado</p>}  {/* "?" = if / ":" = else  */}
      <Botao tarefa = {Logar} classe="botao-logar green">Fazer login</Botao> {/* Estilização utilizando componente + props (Botao.jsx + Botao.css)*/}
      <Botao tarefa = {Deslogar} classe="botao-deslogar red"> Deslogar</Botao> 
      <Titulo classe="yellow">Ola</Titulo>
  
    </div>
  );
}

export default AppExemplo;
