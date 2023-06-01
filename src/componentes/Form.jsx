import React from 'react'
import "./Form.css"


const Form = ({setEstudiante,estudiante, handleSubmit}) => {
  return (
    <div>
        <h1>Carga de estudiantes</h1>
        <form className='formulario' onSubmit={handleSubmit}>
        <label>Nombre </label>
        <input type="text" placeholder = "Nombre" required onChange={(e) => setEstudiante ({...estudiante, nombre: e.target.value})}/>
        <label>Caricatura </label>
        <input type="text" placeholder = "Ingrese caricatura favorita" required onChange = {(e) => setEstudiante((prevEstudiante) => ({...prevEstudiante, caricatura: e.target.value}))}/>
        <button type= "submit" >Enviar</button>
        </form>
    </div>
  )
}

export default Form
