import { useState } from 'react'
import './App.css'
import Header from "./Header"
import Form from "./Form"
import initialState from './initial-state'


function App() {
  const [cv, setCv] = useState(initialState)

  function handlePreview() {
    
  }

  return (
    <>
      <Header />
      <Form />
    </>
  )
}

export default App
