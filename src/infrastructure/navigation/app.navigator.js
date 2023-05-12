import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerScreen } from "../../features/drawer/screens/drawer.screen";
import { DashboardNavigator } from "./dashboard.navigator";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { TransitionPresets } from "@react-navigation/stack";
import { ApplicationNavigator } from "./application.navigator";
const Drawer = createDrawerNavigator();

export const AppNavigator = () => {
  //   return (
  //           <Tab.Navigator
  //             screenOptions={({ route }) => ({
  //               tabBarActiveTintColor: "tomato",
  //               tabBarInactiveTintColor: "gray",
  //               headerShown: false,
  //               tabBarIcon: ({ focused, color, size }) => {
  //                 let iconName;
  //                 if (route.name === "Restaurants") {
  //                   iconName = "md-restaurant";
  //                 } else if (route.name === "map") {
  //                   iconName = "md-map";
  //                 } else if (route.name === "settings") {
  //                   iconName = "md-settings";
  //                 }
  //                 return <Ionicons name={iconName} size={size} color={color} />;
  //               },
  //             })}
  //           >
  //             <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
  //             <Tab.Screen name="map" component={MapScreen} />
  //             <Tab.Screen name="settings" component={SettingsNavigator} />
  //           </Tab.Navigator>
  //   );

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerScreen {...props} />}
      initialRouteName="Dashboard"
      screenOptions={(props)=>({
        headerShown: false,
        drawerStatusBarAnimation: "fade",
        drawerStyle: { width: 356, height: "100%" },
        drawerActiveTintColor: (props) => props.theme.colors.text.primary,
        drawerInActiveTintColor: (props) => props.theme.colors.text.primary,
        swipeEnabled: true,
        ...TransitionPresets.ModalTransition,
          
        })}
    >
      <Drawer.Screen name="Dashboard" component={ApplicationNavigator} />
    </Drawer.Navigator>
  );
};
