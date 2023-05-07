import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeConsumer } from "styled-components";

const base_url = "https://stackoverflow.com/questions/30203044/using-an-authorization-header-with-fetch-in-react-native";
const methods = {
  GET:"GET",
  POST:"POST",
  PUT:"PUT",
  DELETE:"DELETE",
};

const loadToken = async () => {
    const  loaded_data=JSON.parse(await AsyncStorage.getItem("@user"));
    const token=loaded_data.token;
    return token;
};

export const apiRequest = async (requestType = "GET", url = "", bodyForm ) => {
  const token=await loadToken();
  return fetch(base_url + url, {
    method: requestType,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer "+token,
    },
    body: JSON.stringify(bodyForm),
  });
};

export const apiGet = (url = "", bodyForm) =>  apiRequest(methods.GET,  url, bodyForm );
export const apiPost = (url = "", bodyForm) =>  apiRequest(methods.POST,  url, bodyForm );
export const apiPut = (url = "", bodyForm) => apiRequest(methods.PUT,  url, bodyForm );
export const apiDelete = (url = "", bodyForm) => apiRequest(methods.DELETE,  url, bodyForm );
