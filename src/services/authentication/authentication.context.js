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
      if (userInfo) {
        console.log("user Info", userInfo);
        getUserWithJwt(userInfo.token).then(async (res) => {
          await setCurrentUser(res);
          console.log("current User: ", currentUser);
          if (currentUser) setProfile(await getProfile(currentUser.id));
        });
      }
    };
    load();
  }, []);

  const onLogin = async (email, password, rememberMe) => {
    setIsLoading(true);
    await loginrequest(email, password, rememberMe)
      .then((res) => JSON.parse(res))
      .then((user) => {
        console.log("user:", user);
        setUserInfo(user);
        getUserWithJwt(user.token).then((res) => {
          setCurrentUser(res);
          if (currentUser) setProfile(getProfile(res.id));
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
  const onRegister = async (email, password, passwordConfirmation) => {
    setIsLoading(true);
    await registerRequest(email, password, passwordConfirmation)
      .then((res) => JSON.parse(res))
      .then((user) => {
        console.log("user:", user);
        setUserInfo(user);
        getUserWithJwt(user.token).then((res) => {
          setCurrentUser(res);
          if (currentUser) setProfile(getProfile(res.id));
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
