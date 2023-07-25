
import React, { useState, useEffect } from 'react'

const Home = () => {
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {
    if (completed) {
      setTarefa('Parabéns Tarefa concluida');
    }
  }, [completed])




  return (

    <div>
      <h1>Tarefa</h1>
      <h3>{tarefa}</h3>
      <p>Conclua a Tarefa</p>
      <button onClick={() => setCompleted(true)}>Concluir Tarefa </button>

    </div>


  )
}

export default Home