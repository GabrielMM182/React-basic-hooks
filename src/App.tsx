import { useState } from "react";
import "./App.css";
import UseState from "./components/UseState/useState";
import SubmitForm from "./components/Forms/UseStateHook/useStateHook";
import SubmitFormHook from "./components/Forms/UseFormHook/useFormHook";
import ShoppingCart from "./components/UseReduce/useReduceShoppingCard";
import FormWithReducer from "./components/UseReduce/useReduceFormValidate";
import UseEffect from "./components/UseEffect/useEffect";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FetchWithReactQueryAndAxios from "./components/UseEffect/ReactQueryExemple";
import InputFocusExample from "./components/UseRef/useRef";
import UserRegistrationForm from "./components/UseRef/useRef";
import UserForm from "./components/UseContext/UserForm";
import UserProfile from "./components/UseContext/UserProfile";
import { UserProvider } from "./components/UseContext/UserProvider";
import UserFormZod from "./components/UseContext/UserFormZodLib";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";
import UserFormRedux from "./components/redux/UserForm";
import UserProfileRedux from "./components/redux/UserProfile";

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
      {/* <QueryClientProvider client={queryClient}>
        <FetchWithReactQueryAndAxios />
      </QueryClientProvider> */}
      {/* <UserRegistrationForm/> */}
      {/* <UserProvider> */}
      {/* <UserForm /> */}
      {/* <UserFormZod/>
        <UserProfile />
      </UserProvider> */}
      <Provider store={store}>
        <UserFormRedux />
        <UserProfileRedux />
      </Provider>
    </>
  );
}

export default App;
