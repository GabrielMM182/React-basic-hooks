import React, { createContext, useContext, useState } from "react";

// Interface para os dados do usuário
interface User {
  username: string;
  email: string;
}

// Interface para o contexto
interface UserContextType {
  user: User;
  updateUser: (newUser: User) => void;
}

// Criando o contexto
const UserContext = createContext<UserContextType | undefined>(undefined);

// Criando o provider
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>({ username: "", email: "" });

  const updateUser = (newUser: User) => setUser(newUser);

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para consumir o contexto
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};