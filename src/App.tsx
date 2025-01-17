import { useState } from 'react'
import './App.css'
import UseState from './components/UseState/useState'
import SubmitForm from './components/Forms/UseStateHook/useStateHook'
import SubmitFormHook from './components/Forms/UseFormHook/useFormHook'
import ShoppingCart from './components/UseReduce/useReduceShoppingCard'
import FormWithReducer from './components/UseReduce/useReduceFormValidate'

function App() {

  return (
    <>
      <h1>Estudos dos hooks</h1>
      {/* <UseState/> */}
      {/* <SubmitForm/> */}
      {/* <SubmitFormHook/> */}
      {/* <ShoppingCart/> */}
      <FormWithReducer/>
    </>
  )
}

export default App
