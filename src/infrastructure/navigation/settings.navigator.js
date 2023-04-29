import { Text, View } from "react-native";
import { SafeArea } from "../../Components/SafeArea/SafeArea.Component";
import { TransitionPresets, createStackNavigator,CardStyleInterpolators, } from "@react-navigation/stack";
import { AccountScreen } from "../../features/accounts/screens/account.screen";
import { LoginScreen } from "../../features/accounts/screens/login.screen";
import { RegisterScreen } from "../../features/accounts/screens/register.screen";
import { SettingsScreen } from "../../features/settings/screens/settings.Screen";
import { FavouritesScreen } from "../../features/settings/screens/Favourites.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
  return   <SettingsStack.Navigator  screenOptions={{...TransitionPresets.SlideFromRightIOS,gestureEnabled:true,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,headerMode:"screen"}}>
    <SettingsStack.Screen name="Settings" component={SettingsScreen}/>
    <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
    </SettingsStack.Navigator>

};
