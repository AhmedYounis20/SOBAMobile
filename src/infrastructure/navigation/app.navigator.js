// import { SettingsScreen } from "../../features/settings/screens/settings.Screen";
// import { MapScreen } from "../../features/maps/screens/map.Screen";
// import { Ionicons } from "@expo/vector-icons";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { RestaurantsNavigator } from "./restaurants.navigator";
// import { RestaurantsContextProvider } from "../../../src/services/restaurants/restaurants.context";
// import { LocationContextProvider } from "../../../src/services/location/location.context";
// import { FavouritesContextProvider } from "../../../src/services/favourites/favourites.context";
// import { useContext, useEffect } from "react";
// import { AuthenticationContext } from "../../services/authentication/authentication.context";
// import { SettingsNavigator } from "./settings.navigator";

// const Tab = createBottomTabNavigator();
// export const AppNavigator = () => {
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
// };
