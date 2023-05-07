import { useContext,useEffect } from "react";
import { AppNavigator } from "./app.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AccountNavigator } from "./account.navigator";
import { NavigationContainer } from "@react-navigation/native";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  useEffect(()=>{
    console.log("auth",isAuthenticated);
  },[isAuthenticated]);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
