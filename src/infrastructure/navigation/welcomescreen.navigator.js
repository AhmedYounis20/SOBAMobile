import { AccountNavigator } from "./account.navigator";

import { ThemeProvider } from "styled-components";
import { WelcomeNavigator } from "./welcome.navigator";
export const WelcomeScreen = () => {
  const isFirstUse = true;
  return <>{isFirstUse ? <WelcomeNavigator /> : <AccountNavigator />}</>;
};
