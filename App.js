import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { ThemeProvider } from "styled-components/native";
import { Navigation } from "./src/infrastructure/navigation";
import { LoadFonts } from "./src/services/fonts/fonts.services";
import {
  ThemeContext,
  ThemeContextProvider,
} from "./src/services/ThemeContext/Theme.context";
import { useContext, useEffect } from "react";

export default function App() {
  const isfontloaded = LoadFonts();
  if (!isfontloaded) return null;

  return (
    <ThemeContextProvider>
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
    </ThemeContextProvider>
  );
}
