import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { apiPost } from "../apirequest/apirequest.service";
import { createProfile } from "../profile/profile.service";

let loginError = { username: "", password: "" };
let signUpError = { username: "", password: "", passwordConfirmation: "" };
export const loginrequest = (email, password, rememberMe = false) => {
  const data = {
    username: email,
    password: password,
    rememberMe: rememberMe,
  };

  const load = async (resolve, reject) => {
    try {
      let isOk = true;
      let loginError = {}; // Define loginError object
      const result = await apiPost("api/authorize/AuthenticateJWT", data).then(
        (res) => {
          console.log("res:" + JSON.stringify(res));
          isOk = res.ok;
          return res.json();
        }
      );
      console.log("data sent: " + JSON.stringify(data));
      if (!isOk) {
        // loginError = result;
        if (result == "Wrong Password") loginError = { Password: [result] };
        else if (result == "User does not exist")
          loginError = { UserName: [result] };
        else if (typeof result === "string" || result instanceof String) {
          loginError = { errors: [result] };
        } else {
          loginError = result.errors;
        }
        console.log("loginError: " + JSON.stringify(loginError));
        console.log("result: " + JSON.stringify(result));
        reject(loginError);
      } else {
        // Replace dataToSave with the appropriate variable
        saveUser(result);
        createProfile()
      }

      resolve(AsyncStorage.getItem("@user")); // Move resolve here
    } catch (error) {
      console.log(error);
      reject(error);
    }
  };

  return new Promise((resolve, reject) => {
    load(resolve, reject); // Call load function
  });
};

export const registerRequest = (email, password, passwordConfirmation) => {
  const data = {
    username: email,
    password: password,
    passwordConfirm: passwordConfirmation,
  };

  const load = async (resolve, reject) => {
    try {
      let isOk = true;
      let registerError = {}; // Define loginError object
      const result = await apiPost("api/authorize/register", data).then(
        (res) => {
          console.log("res:" + JSON.stringify(res));
          isOk = res.ok;
          return res.json();
        }
      );

      if (!isOk) {
        // loginError = result;
        if (result == "Password") registerError = { Password: [result] };
        else if (result == "User already exists!")
          registerError = { UserName: [result] };
        else if (typeof result === "string" || result instanceof String) {
          registerError = { errors: [result] };
        } else {
          registerError = result.errors;
        }
        console.log("registerError: " + JSON.stringify(registerError));
        console.log("result: " + JSON.stringify(result));
        reject(registerError);
      } else {
        // Replace dataToSave with the appropriate variable
        saveUser(result);
      }

      resolve(AsyncStorage.getItem("@user")); // Move resolve here
    } catch (error) {
      console.log(error);
      reject(error);
    }
  };

  return new Promise((resolve, reject) => {
    load(resolve, reject); // Call load function
  });
};

export const logout = () => null;

export const saveUser = async (user) => {
  const data = JSON.stringify(user);

  await AsyncStorage.setItem("@user", `${data}`);
};

export const removeUser = async (user) =>
  await AsyncStorage.removeItem(`@user`);
