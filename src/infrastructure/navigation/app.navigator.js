// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View,Text } from "react-native";
import { HomeScreen } from "../../features/application/screens/home.screen";
import {SafeArea} from "../../../src/components/SafeArea/SafeArea.Component"

// const Tab = createBottomTabNavigator();
export const AppNavigator = () => {
  //   return (
  //     <FavouritesContextProvider>
  //       <LocationContextProvider>
  //         <RestaurantsContextProvider>
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
  //         </RestaurantsContextProvider>
  //       </LocationContextProvider>
  //     </FavouritesContextProvider>
  //   );
  return (
    <SafeArea>
    <HomeScreen/>
    </SafeArea>
  );
};
