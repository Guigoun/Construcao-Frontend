import { useState } from 'react'

import './App.css'
import './Component.css'

import Garage from './complist'
import Suplementos from './listgrowth'
import Alunos from './listalunos'
import Form from './addform'
import HandForm from './handlingform'
import SubForm from './submitForm'
import MyForm from './compform'
import TextForm from './textform'
import SelectForm from './selectform'
import MultipleForm from './form'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Garage />
      <Suplementos />
      <Alunos />
      <Form /><br />
      <HandForm /><br />
      <SubForm /><br />
      <MyForm /><br />
      <TextForm /><br />
      <SelectForm />
      <MultipleForm />
    </>
  )
}

export default App
