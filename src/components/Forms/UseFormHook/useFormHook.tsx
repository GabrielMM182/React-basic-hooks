import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  username: string;
  email: string;
};

const SubmitFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [message, setMessage] = React.useState("");

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage("Data submitted successfully!");
        reset(); // Limpa o formulário após o envio bem-sucedido
      } else {
        setMessage("Failed to submit data.");
      }
    } catch {
      setMessage("An error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <input
          type="text"
          {...register("username", { required: "Username is required" })}
          placeholder="Username"
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <button type="submit">Submit</button>
      <p>{message}</p>
    </form>
  );
};

export default SubmitFormHook;