import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerScreen } from "../../features/drawer/screens/drawer.screen";
import { DashboardNavigator } from "./dashboard.navigator";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { TransitionPresets } from "@react-navigation/stack";
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
      screenOptions={{
        headerShown: false,
        drawerStatusBarAnimation: "fade",
        drawerStyle: { width: 356, height: "100%" },
        drawerActiveTintColor: (props) => props.theme.colors.text.info,
        swipeEnabled: true,
        drawerIcon: ({ color, size }) => (
          <MaterialIcons name="dashboard" size={size} color={color} />
          ),
          ...TransitionPresets.ModalTransition,
          
        }}
    >
      <Drawer.Screen name="Dashboard" component={DashboardNavigator} />
      <Drawer.Screen name="item 1" component={DashboardNavigator} />
      <Drawer.Screen name="item 2" component={DashboardNavigator} />
    </Drawer.Navigator>
  );
};
