// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DashboardScreen } from "../../features/application/screens/dashboard.screen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "../../features/application/screens/home.screen";
import { TransitionPresets } from "@react-navigation/stack";
import { DrawerScreen } from "../../features/drawer/screens/drawer.screen";
import { View } from "react-native";
import { Text } from "../../components/typography/text.component";
// const Tab = createBottomTabNavigator();
const Drawer=createDrawerNavigator();

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
      <Drawer.Navigator drawerContent={(props)=><DrawerScreen {...props}/>}  initialRouteName="Dashboard" screenOptions={{headerShown:false,drawerStatusBarAnimation:"fade",drawerStyle:{width:356,height:"100%"},swipeEnabled:true}} >
    <Drawer.Screen name="Dashboard" component={DashboardScreen}/>
    <Drawer.Screen name="new" component={HomeScreen}/>
  </Drawer.Navigator>
  );
};
