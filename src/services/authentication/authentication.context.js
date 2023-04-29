import { createContext, useEffect, useState } from "react";
import {
  loginrequest,
  logout,
  registerrequest,
} from "./authentication.service";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthenticationContext = createContext();
export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => console.log(user), []);
  onAuthStateChanged(getAuth(), (usr) => {
    if (usr) setUser(usr);
    setIsLoading(false);
  });

  const onLogin = (email, password) => {
    loginrequest(email, password)
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.toString().split(":").slice(-1));
        setIsLoading(false);
      });
  };
  const onLogout = () => {
    logout().then(()=>{
      setUser(null);
      setError(null);
    });
    console.log("user", user);
  };
  const onRegister = (email, password, passwordConfirmation) => {
    if (password !== passwordConfirmation) {
      setError("Error:Password does not match");
      return;
    }
    registerrequest(email, password)
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.toString().split(":").slice(-1));
        setIsLoading(false);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
