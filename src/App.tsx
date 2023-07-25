import './App.css';
import React, { useState } from 'react'
import Home from './pages/home/Home'



function App  ()  {
  const [valor, setValor] = useState(0);
  function handleClick(){
  setValor (valor + 1)
  }
  return (
    
      <div>
      <h1>App</h1>
     <p>o valor é: {valor} </p>
     <button onClick={handleClick}>Adicionar 1</button>
      </div>
        
    
  )
}

export default App