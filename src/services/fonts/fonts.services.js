import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as usePoppins,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";


export const LoadFonts=()=>{

    const [poppinsloaded] = usePoppins({ Poppins_400Regular });
    const [poppinsBoldloaded] = usePoppins({ Poppins_700Bold });
    const [oswaldLoaded] = useOswald({
      Oswald_400Regular,
    });
  
    const [latoLoaded] = useLato({
      Lato_400Regular,
    });
  
    if (!oswaldLoaded || !latoLoaded || !poppinsBoldloaded || !poppinsloaded) {
      return false;
    }
    return true;

}