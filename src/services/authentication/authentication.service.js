import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
export const loginrequest = (email, password) => {
  const data = {
    username: email,
    password: password,
    rememberMe: false,
  };

  const user = {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFobWVkWW91bmlzIiwibmFtZWlkIjoiMmQwODhiNWQtOTk5NC00MTEzLTVlY2ItMDhkYjI5NjU2ODViIiwiZW1haWwiOiIiLCJyb2xlIjoiNldQV1lJRTdJMldYQ1NURDVLQVcyRFJaUkdYSUhKUVYiLCJuYmYiOjE2ODMzMDM0ODAsImV4cCI6MTY4MzczNTQ4MCwiaWF0IjoxNjgzMzAzNDgwfQ.fcH-zB_DhvRCZY4bvlnHIziFzecutHwYz-CoAKc8wXc",
  };
  const load = async () => {
    try {
      // console.log(await AsyncStorage.getItem("@data"));
      // const user = await fetch(
      //   "https://c53c-156-221-26-227.ngrok-free.app/api/Authentication/AuthenticateJWT",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(data),
      //   }
      // ).then((res) => res.json());
      if (user) saveUser(user);
    } catch (error) {
      console.log(error);
    }
  };
  load();
  return new Promise((resolve, reject) => {
    try {
      resolve(AsyncStorage.getItem("@user"));
    } catch (error) {
      reject(error);
    }
  });
};

export const logout = () => null;

export const saveUser = async (user) => {
  const data = JSON.stringify(user);
  
  await AsyncStorage.setItem("@user", `${data}`);
};

export const removeUser = async (user) => await AsyncStorage.removeItem(`@user`);