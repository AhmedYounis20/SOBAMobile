import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { DashboardScreen } from "../../features/dashboard/screens/dashboard.screen";
import { ProfileNavigator } from "./profile.navigator";
import { GreenHouseScreen } from "../../features/greenhouse/screens/greenhouse.screen";
import { AddGreenHouseScreen } from "../../features/greenhouse/screens/addGreenHouse.Screen";
import { SensorControl } from "../../features/sensor/screens/sensorControl.screen";
import { NotificationScreen } from "../../features/notifications/screens/notifications.screen";
import Notes from "../../features/notes/screens/notes.screen";
import { GreenHouseDetailsScreen } from "../../features/greenhouse/screens/greenhouseDetails.screen";
import { CropDetailsScreen } from "../../features/Crops/Screens/cropDetails.screen";

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
      <DashboardStack.Screen name="SensorControl" component={SensorControl} />

      <DashboardStack.Screen
        name="Notifications"
        component={NotificationScreen}
      />
      <DashboardStack.Screen name="Greenhouse" component={GreenHouseScreen} />
      <DashboardStack.Screen
        name="GreenHouseDetails"
        component={GreenHouseDetailsScreen}
      />
      <DashboardStack.Screen
        name="AddGreenHouse"
        component={AddGreenHouseScreen}
      />
      <DashboardStack.Screen name="CropDetails" component={CropDetailsScreen} />
    </DashboardStack.Navigator>
  );
};
