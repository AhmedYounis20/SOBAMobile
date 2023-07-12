import { useContext, useEffect } from "react";
import { AppNavigator } from "./app.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeContext } from "../../services/ThemeContext/Theme.context";
import { ThemeProvider } from "styled-components";
import { WelcomeScreen } from "./welcomescreen.navigator";
import { AccountNavigator } from "./account.navigator";
import { WelcomeNavigator } from "./welcome.navigator";
import { NotificationMessage } from "../../features/notifications/screens/notificationMessage.screen";

export const Navigation = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isAuthenticated } = useContext(AuthenticationContext);
  const isFirstLook = true;
  useEffect(() => {
    console.log("auth", isAuthenticated);
  }, [isAuthenticated]);
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {isAuthenticated ? (
          <>
            <NotificationMessage />
            <AppNavigator />
          </>
        ) : (
          <WelcomeNavigator />
        )}
      </NavigationContainer>
    </ThemeProvider>
  );
};
