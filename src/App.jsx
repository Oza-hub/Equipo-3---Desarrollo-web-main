import { useState } from 'react'
import './App.css'
import guitarra from './assets/img/guitarra.jpg'; 




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <h1>TIENDA DE MUSICA</h1>
      <h1>"LOS RECUERDOS DE ELLA"</h1>

      <p className="read-the-docs">
        <h1>Instrumentos musicales para todos los gustos</h1>
      </p>

      <img src={guitarra}/>
      


    </div>
  )
}

export default App
