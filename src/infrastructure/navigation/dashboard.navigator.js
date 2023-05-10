import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import { DashboardScreen } from "../../features/application/screens/dashboard.screen";
import { ProfileNavigator } from "./profile.navigator";

const DashboardStack=createStackNavigator();
export const DashboardNavigator=()=>{
return (
    <DashboardStack.Navigator screenOptions={{headerShown:false,...TransitionPresets.ModalFadeTransition}} initialRouteName="dashboard">
        <DashboardStack.Screen name="dashboard" component={DashboardScreen} />
        <DashboardStack.Screen name="Profile" component={ProfileNavigator} />
    </DashboardStack.Navigator>
);
}