import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const UserProfileRedux: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <h2>Perfil do Usuário</h2>
      <p>Nome de Usuário: {user.username}</p>
      <p>E-mail: {user.email}</p>
    </div>
  );
};

export default UserProfileRedux;