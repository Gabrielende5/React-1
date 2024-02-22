import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  // const (variavel, functionParaMudarValorDaVariavel) = useState("valor inicial");
  // "UseEffect" = muda o valor da variavel no html (renderiza na tela); "UseState" = muda o valor da variavel no codigo
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
      <h1> Use effect foi chamado {useEffectCounter} vezes </h1>
      {logado ? <p>Logado</p> : <p> Deslogado</p>} 
      <button onClick={Logar}>Logar</button>
      <button onClick={Deslogar}>Deslogar</button>
      
    </div>
  );
  // "?" = if / ":" = else 
}

export default App;
