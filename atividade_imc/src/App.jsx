import { useState } from 'react'
import Calcular from './IMC/form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calcular />
    </>
  )
}

export default App
