import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { updateUser } from "./userSlice";

// Esquema Zod
const userSchema = z.object({
  username: z.string().min(3, "O nome de usuário deve ter pelo menos 3 caracteres"),
  email: z.string().email("Insira um e-mail válido"),
});

type UserFormData = z.infer<typeof userSchema>;

const UserFormRedux: React.FC = () => {
  const dispatch = useDispatch(); // responsavel por cha,ar toda a logica do useContext

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: UserFormData) => {
    dispatch(updateUser(data)); // Envia os dados para o estado global
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Nome de Usuário:
          <input
            type="text"
            {...register("username")}
          />
        </label>
        {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}
      </div>
      <div>
        <label>
          E-mail:
          <input
            type="email"
            {...register("email")}
          />
        </label>
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default UserFormRedux;