import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  AuthenticationContext,
  AuthenticationContextProvider,
} from "./src/services/authentication/authentication.context";
import { LoginScreen } from "./src/features/authentication/screens/login.screen";
import { ThemeProvider } from "styled-components/native";
import { Navigation } from "./src/infrastructure/navigation";
import { DashboardScreen } from "./src/features/application/screens/dashboard.screen";

import { theme } from "./src/infrastructure/theme";
import { LoadFonts } from './src/services/fonts/fonts.services';

export default function App() {
  const isfontloaded=LoadFonts();
  if(!isfontloaded)
    return null;
  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
