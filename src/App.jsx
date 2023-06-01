import { useState } from 'react'

import './App.css'
import Card from './componentes/Card'
import Form from './componentes/Form'

function App() {

  const[estudiante, setEstudiante]=useState ({
    nombre: " ",
    caricatura: " "
  })
  
  const [show, setShow] = useState (false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if((estudiante.nombre.length > 3)|| (estudiante.caricatura.length >6)) {
      setShow(true)
    }else {
      setShow(false)
    }
  }
  return (
    <>
      <div className='app'>
      
        <Form handleSubmit={handleSubmit} setEstudiante={setEstudiante}/>
        {!show && <p>¡Error! Por favor, verifica los campos.</p>}
        {show && <Card estudiante = {estudiante}/>}
        
      

      </div>
    </>
  )
}

export default App
