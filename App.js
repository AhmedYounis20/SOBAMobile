import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AuthenticationContext, AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import { LoginScreen } from './src/features/authentication/screens/login.screen'
import { ThemeProvider } from 'styled-components/native';
import {theme} from "./src/infrastructure/theme"
import { Navigation } from './src/infrastructure/navigation';
export default function App() {
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
