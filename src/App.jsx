import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componentes/card'
import Form from './componentes/Form'

function App() {

  return (
    <>
      <div className='app'>
      
        <Form/>
        <Card name = "Roman"/>

      </div>
    </>
  )
}

export default App
