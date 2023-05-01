import { Text, View } from "react-native";
import { SafeArea } from "../../components/SafeArea/SafeArea.Component";
import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
// import { AccountScreen } from "../../features/accounts/screens/account.screen";
import { LoginScreen } from "../../features/authentication/screens/login.screen";
// import { RegisterScreen } from "../../features/accounts/screens/register.screen";

const AccountStack = createStackNavigator();

export const AccountNavigator = () => {
  return   <AccountStack.Navigator screenOptions={{headerShown:false,...TransitionPresets.SlideFromRightIOS,gestureEnabled:true}}>
    {/* <AccountStack.Screen name="main" component={AccountScreen}/> */}
    <AccountStack.Screen name="login" component={LoginScreen}/>
    {/* <AccountStack.Screen name="register" component={RegisterScreen}/> */}
    </AccountStack.Navigator>

};
