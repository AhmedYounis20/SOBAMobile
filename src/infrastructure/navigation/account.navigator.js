import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../../features/authentication/screens/login.screen";

const AccountStack = createStackNavigator();

export const AccountNavigator = () => {
  return   <AccountStack.Navigator screenOptions={{headerShown:false,...TransitionPresets.SlideFromRightIOS,gestureEnabled:true}}>
    {/* <AccountStack.Screen name="main" component={AccountScreen}/> */}
    <AccountStack.Screen name="login" component={LoginScreen}/>
    {/* <AccountStack.Screen name="register" component={RegisterScreen}/> */}
    </AccountStack.Navigator>
};