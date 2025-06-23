import { createContext, useState } from "react";

interface AuthContextProps {
  isLogged: boolean;
  signIn: () => void;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);

  const signIn = () => {
    // Fake login
    setIsLogged(true);
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