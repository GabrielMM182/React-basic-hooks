import React, { useRef, useState } from "react";
import axios from "axios";

const UserRegistrationForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<{ email?: string; username?: string }>({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({}); // Limpa erros prévios
    setSuccessMessage(""); // Limpa mensagens de sucesso

    const data = {
      email: emailRef.current?.value,
      username: usernameRef.current?.value,
    };

    try {
      // Chamada à API Mock
      const response = await axios.post(
        "https://mocki.io/v1/522f7fda-812a-493f-a429-2c5adfa249c7",
        data
      );
      
      // Mock da resposta de erro
      if (response.data.errors) {
        setErrors(response.data.errors);

        // Focar no primeiro campo com erro
        if (response.data.errors.email && emailRef.current) {
          emailRef.current.focus();
        } else if (response.data.errors.username && usernameRef.current) {
          usernameRef.current.focus();
        }
      } else {
        setSuccessMessage("User registered successfully!");
      }
    } catch (err) {
      console.error("Error occurred during registration", err);
      setErrors({ email: "Something went wrong. Please try again." });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input ref={emailRef} type="email" placeholder="Enter your email" />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <label>Username:</label>
        <input ref={usernameRef} type="text" placeholder="Enter your username" />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>
      <button type="submit">Register</button>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </form>
  );
};

export default UserRegistrationForm;