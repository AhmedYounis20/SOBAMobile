import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
export const loginrequest = (email, password) => {
  const data = {
    email: email,
    password: password,
  };

  const load = async () => {
    console.log("here");
    try {
      const user = await fetch(
        "https://7cf0-156-221-107-245.ngrok-free.app/api/Authentication/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      ).then((res) => res.json());
      if (user) saveUser(user);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
    console.log("here");
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

export const removeUser = async (user) => {
  console.log("user to remove", await AsyncStorage.getItem("@user"));
  await AsyncStorage.removeItem(`@user`);
};