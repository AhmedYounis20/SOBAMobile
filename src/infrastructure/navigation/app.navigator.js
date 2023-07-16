import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerScreen } from "../../features/drawer/screens/drawer.screen";
import { TransitionPresets } from "@react-navigation/stack";
import { ApplicationNavigator } from "./application.navigator";
import { DiseaseDetectorNavigator } from "./diseasedetection.navigator";
import { AccountNavigator } from "./account.navigator";
import { WelcomeNavigator } from "./welcome.navigator";
import { ProfileNavigator } from "./profile.navigator";
import Notes from "../../features/notes/screens/notes.screen";
import { StatisticsScreen } from "../../features/statistics/screens/statistics.screen";

const Drawer = createDrawerNavigator();
export const AppNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerScreen {...props} />}
      initialRouteName="Dashboard"
      screenOptions={(props) => ({
        headerShown: false,
        drawerStatusBarAnimation: "fade",
        drawerStyle: {
          width: 325,
          height: "100%",
        },
        swipeMinDistance: 50,
        swipeEdgeWidth: 50,
        drawerActiveTintColor: (props) => props.theme.colors.text.primary,
        drawerInActiveTintColor: (props) => props.theme.colors.text.primary,
        swipeEnabled: true,
        ...TransitionPresets.ModalTransition,
      })}
    >
      <Drawer.Screen name="Dashboard" component={ApplicationNavigator} />
      <Drawer.Screen
        name="Disease Detection"
        component={DiseaseDetectorNavigator}
      />
      <Drawer.Screen name="Account" component={AccountNavigator} />
      <Drawer.Screen name="welcome" component={WelcomeNavigator} />
      <Drawer.Screen name="Profile" component={ProfileNavigator} />
      <Drawer.Screen name="Notes" component={Notes} />
      <Drawer.Screen name="Statistics" component={StatisticsScreen} />
    </Drawer.Navigator>
  );
};
