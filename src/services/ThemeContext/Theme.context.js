import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { light } from "../../infrastructure/theme/light";
import { dark } from "../../infrastructure/theme/dark";
const getSavedTheme = async () => {
  const theme = await AsyncStorage.getItem("@theme");
  return theme;
};
const SaveTheme = async (theme, setTheme) => {
  await AsyncStorage.setItem("@theme", theme);
  theme == "light" ? setTheme(light) : setTheme(dark);
  console.log(theme, light);
};

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(light);
  const [error, setError] = useState("");

  const toggleTheme = () => {
    if (theme == light) SaveTheme("dark", setTheme);
    else SaveTheme("light", setTheme);
  };
  useEffect(() => {
    const operate = async () => {
      await AsyncStorage.removeItem("@theme");

      console.log(await getSavedTheme());

      if ((await getSavedTheme()) === null) {
        SaveTheme("light", setTheme);
      } else {
        if ((await getSavedTheme()) === "light") setTheme(light);
        else setTheme(dark);
      }
    };
    operate();
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
