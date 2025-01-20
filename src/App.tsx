import { useState } from 'react'
import './App.css'
import UseState from './components/UseState/useState'
import SubmitForm from './components/Forms/UseStateHook/useStateHook'
import SubmitFormHook from './components/Forms/UseFormHook/useFormHook'
import ShoppingCart from './components/UseReduce/useReduceShoppingCard'
import FormWithReducer from './components/UseReduce/useReduceFormValidate'
import UseEffect from './components/UseEffect/useEffect'
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FetchWithReactQueryAndAxios from './components/UseEffect/ReactQueryExemple'

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <h1>Estudos dos hooks</h1>
      {/* <UseState/> */}
      {/* <SubmitForm/> */}
      {/* <SubmitFormHook/> */}
      {/* <ShoppingCart/> */}
      {/* <FormWithReducer/> */}
      {/* <UseEffectTest/> */}
      <QueryClientProvider client={queryClient}>
    {/* Chama o componente que utiliza React Query */}
    <FetchWithReactQueryAndAxios />
  </QueryClientProvider>    </>
  )
}

export default App
