import { useContext, useEffect } from "react";
import { AppNavigator } from "./app.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AccountNavigator } from "./account.navigator";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeContext } from "../../services/ThemeContext/Theme.context";
import { light } from "../../infrastructure/theme/light";
import { ThemeProvider } from "styled-components";

export const Navigation = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isAuthenticated } = useContext(AuthenticationContext);
  useEffect(() => {
    console.log("auth", isAuthenticated);
  }, [isAuthenticated]);
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
      </NavigationContainer>
    </ThemeProvider>
  );
};
