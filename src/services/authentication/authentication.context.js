import { createContext, useEffect, useState } from "react";
import {
  loginrequest,
  logout,
  saveUser,
  removeUser,
} from "./authentication.service";
import AsyncStorage from "@react-native-async-storage/async-storage";


const getSavedUser=async ()=>{
  const data=await AsyncStorage.getItem("@user");
  const user=JSON.parse(data);
  return user;
}
export const AuthenticationContext = createContext();
export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const load=async()=>{
        const usr=await getSavedUser();
        if (usr) setUser(usr);
        setIsLoading(false);
    }
    load();
}, []);

  useEffect(() => {
    if (user) setUser(user);
    setIsLoading(false);
  }, [user]);

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
    logout();
    removeUser(user);
    setUser(null);
    setError(null);
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
