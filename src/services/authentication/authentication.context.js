import { createContext, useEffect, useState } from "react";
import {
  loginrequest,
  logout,
  saveUser,
  removeUser,
  registerRequest,
  getUserWithJwt,
} from "./authentication.service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getProfile } from "../profile/profile.service";

const getSavedUser = async () => {
  const data = await AsyncStorage.getItem("@user");
  const user = JSON.parse(data);
  return user;
};
export const AuthenticationContext = createContext();
export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const load = async () => {
      const usr = await getSavedUser();
      if (usr) setUserInfo(usr);
      setIsLoading(false);
      if (userInfo)
        getUserWithJwt(userInfo.token).then(async (res) => {
          setCurrentUser(res);
          setProfile(await getProfile(currentUser.id));
        });
    };
    load();
  }, []);

  const onLogin = (email, password, rememberMe) => {
    setIsLoading(true);
    loginrequest(email, password, rememberMe)
      .then(async (user) => {
        console.log("user:", user);
        setUserInfo(user);
        getUserWithJwt(userInfo.token).then(async (res) => {
          setCurrentUser(res);
          setProfile(await getProfile(currentUser.id));
        });
        return user;
      })
      .catch((error) => {
        setError(error);
      });
    setIsLoading(false);
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
        setUserInfo(JSON.parse(user));
        getUserWithJwt(userInfo.token).then(async (res) => {
          setCurrentUser(res);
          setProfile(await getProfile(currentUser.id));
        });
        return JSON.parse(user);
      })
      .catch((error) => {
        setError(error);
      });
    setIsLoading(false);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        userInfo,
        currentUser,
        profile,
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
