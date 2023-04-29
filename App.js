import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { DashboardScreen } from "./src/appliction/screens/dashboard.screen";

import { theme } from "./src/infrastructure/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DashboardScreen />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
