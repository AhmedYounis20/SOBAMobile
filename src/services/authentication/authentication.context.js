import { createContext, useEffect, useState } from "react";
import {
  loginrequest,
  logout,
  saveUser,
  removeUser,
  registerRequest,
} from "./authentication.service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiGet, apiPost } from "../apirequest/apirequest.service";

const getSavedUser = async () => {
  const data = await AsyncStorage.getItem("@user");
  const user = JSON.parse(data);
  return user;
};
export const AuthenticationContext = createContext();
export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const load = async () => {
      const usr = await getSavedUser();
      if (usr) setUserInfo(usr);
      setIsLoading(false);
    };
    load();
  }, []);

  useEffect(() => {
    if (userInfo != null) {
      const load = async () => {
        console.log("Token: " + userInfo.token);
        const res = await apiPost(
          "api/authorize/GetUserByJwt",
          userInfo.token
        ).then((res) => {
          setCurrentUser(res.json());
          console.log(currentUser);
          return currentUser;
        });
        console.log("usersr: " + res);
      };
      load();
    }
  }, [userInfo]);

  useEffect(() => {
    if (userInfo) setUserInfo(userInfo);
    setIsLoading(false);
  }, [userInfo]);

  const onLogin = (email, password, rememberMe) => {
    setIsLoading(true);
    loginrequest(email, password, rememberMe)
      .then((user) => {
        console.log("user:", user);
        setUserInfo(user);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };
  const onLogout = () => {
    logout();
    removeUser(userInfo);
    setUserInfo(null);
    setError(null);
  };
  const onRegister = (email, password, passwordConfirmation) => {
    setIsLoading(true);
    registerRequest(email, password, passwordConfirmation)
      .then((user) => {
        console.log("user:", user);
        setUserInfo(user);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        userInfo,
        isLoading,
        isAuthenticated: !!userInfo,
        error,
        onLogin,
        onRegister,
        onLogout,
        setError,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
