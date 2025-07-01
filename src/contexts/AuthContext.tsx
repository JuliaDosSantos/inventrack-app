import { createContext, useState } from "react";
import api from "../service/api";

interface AuthContextProps {
  isLogged: boolean;
  signIn: (email: string, senha: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);

  const signIn = (email:string, senha:string) => {
    api.post("/usuario/login", {
      email: email,
      senha: senha
    })
    .then(response => {
      setIsLogged(true);
    }).catch(err => {
          
    })
  };

  const signOut = () => {
    // Fake logout
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider value={{ isLogged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};