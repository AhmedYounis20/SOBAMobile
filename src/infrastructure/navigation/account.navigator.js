import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { AccountScreen } from "../../features/account/screens/account.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";
import { View } from "react-native";

const AccountStack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalFadeTransition,
        gestureEnabled: true,
      }}
    >
      <AccountStack.Screen name="main" component={AccountScreen} />
      <AccountStack.Screen name="login" component={LoginScreen} />
      <AccountStack.Screen name="register" component={RegisterScreen} />
    </AccountStack.Navigator>
  );
};
