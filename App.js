import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";
import { LoadFonts } from "./src/services/fonts/fonts.services";
import { ThemeContextProvider } from "./src/services/ThemeContext/Theme.context";

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
