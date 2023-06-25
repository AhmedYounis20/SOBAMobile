import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { ThemeProvider } from "styled-components/native";
import { Navigation } from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";
import { LoadFonts } from "./src/services/fonts/fonts.services";

export default function App() {
  const isfontloaded = LoadFonts();
  if (!isfontloaded) return null;
  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
}
