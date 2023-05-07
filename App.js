import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AuthenticationContext, AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import { LoginScreen } from './src/features/authentication/screens/login.screen'
import { ThemeProvider } from 'styled-components/native';
import { Navigation } from './src/infrastructure/navigation';
import { DashboardScreen } from "./src/features/application/screens/dashboard.screen";

import { theme } from "./src/infrastructure/theme";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
      
    <ThemeProvider theme={theme}>

    <AuthenticationContextProvider>
    <Navigation/>
    </AuthenticationContextProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
