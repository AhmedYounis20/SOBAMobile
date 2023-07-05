import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { DashboardScreen } from "../../features/dashboard/screens/dashboard.screen";
import { ProfileNavigator } from "./profile.navigator";
import { GreenHouseScreen } from "../../features/greenhouse/screens/greenhouse.screen";
import { AddGreenHouseScreen } from "../../features/addGreenhouse/screens/addGreenHouse.Screen";
import { SensorControl } from "../../features/sensor/screens/sensorControl.screen";

const DashboardStack = createStackNavigator();
export const DashboardNavigator = () => {
  return (
    <DashboardStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalFadeTransition,
      }}
      initialRouteName="dashboard"
    >
      <DashboardStack.Screen name="dashboard" component={DashboardScreen} />
      <DashboardStack.Screen name="Greenhouse" component={GreenHouseScreen} />
      <DashboardStack.Screen name="SensorControl" component={SensorControl} />
      <DashboardStack.Screen name="Profile" component={ProfileNavigator} />
      <DashboardStack.Screen
        name="AddGreenHouse"
        component={AddGreenHouseScreen}
      />
    </DashboardStack.Navigator>
  );
};
