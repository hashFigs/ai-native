import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';  

interface AuthContextType {
  isLoggedIn: boolean;
  logIn: (token: string) => void;
  logOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate(); // Move this here
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const logIn = (token: string) => {
    localStorage.setItem('authToken', token);
    setIsLoggedIn(true);
  };

  const logOut = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/'); // Redirect after logging out
  };

  const value = { isLoggedIn, logIn, logOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
