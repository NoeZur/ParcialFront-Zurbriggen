import React from 'react'
import "./Card.css"


const Card = ({estudiante}) => {
  return (
    <div className='card'>
     
      <div>
     <>
    
      <h3>Gracias, {estudiante.nombre} !</h3>
      <h4>Tu caricatura favorita es{estudiante.caricatura} </h4>
      

      </>
        
      
      </div>
      </div>
  )
} 
export default Card
