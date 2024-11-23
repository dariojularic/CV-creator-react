import { useState } from 'react'
import './App.css'
import Header from "./Header"
import Form from "./Form"
import initialState from './initial-state'
import PropTypes from "prop-types";


function App() {
  const [cv, setCv] = useState(initialState)

  function handleInputChange(event) {
    const {name, value} = event.target
    setCv({
      ...cv,
      [name]: value
    })
    // console.log(event.target)
    console.log(cv)
  }

  return (
    <>
      <Header />
      <Form cv={cv} setCv={setCv} />
    </>
  )
}

export default App
