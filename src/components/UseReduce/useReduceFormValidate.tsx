import React, { useReducer } from "react";

type FormState = {
  username: string;
  email: string;
  password: string;
  isValid: boolean;
};

type FormAction =
  | { type: "UPDATE_FIELD"; field: string; value: string }
  | { type: "VALIDATE" };

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "VALIDATE":
      const isValid =
        state.username.length > 0 &&
        state.email.includes("@") &&
        state.password.length >= 6;
      return { ...state, isValid };
    default:
      return state;
  }
};

const FormWithReducer = () => {
  const [state, dispatch] = useReducer(formReducer, {
    username: "",
    email: "",
    password: "",
    isValid: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "VALIDATE" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={state.username}
        onChange={(e) =>
          dispatch({ type: "UPDATE_FIELD", field: "username", value: e.target.value })
        }
      />
      <input
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={(e) =>
          dispatch({ type: "UPDATE_FIELD", field: "email", value: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={state.password}
        onChange={(e) =>
          dispatch({ type: "UPDATE_FIELD", field: "password", value: e.target.value })
        }
      />
      <button type="submit">Submit</button>
      {state.isValid ? (
        <p>Form is valid!</p>
      ) : (
        <p>Please complete the form correctly.</p>
      )}
      {state.password.length > 0 && state.password.length < 6 && (
        <p>Password must be at least 6 characters long. you digit total of = {state.password.length} characters</p>
      )}
    </form>
  );
};

export default FormWithReducer;