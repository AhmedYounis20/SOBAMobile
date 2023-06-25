import { DashboardNavigator } from "./dashboard.navigator";
import {
  AntDesign,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { ProfileNavigator } from "./profile.navigator";
import { AssistantNavigator } from "./assistant.navigator";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const ApplicationTab = createMaterialTopTabNavigator();

export const ApplicationNavigator = () => {
  return (
    <ApplicationTab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarActiveTintColor: "#00FF00",
        tabBarInactiveTintColor: "gray",
        tabBarIconStyle: {
          fontWeight: 700,
          fontSize: 50,
        },
        tabBarShowLabel: false,
        tabBarIndicatorStyle: { height: 0 },
        tabBarContentContainerStyle: {
          borderRadius: 50,
        },
      }}
    >
      <ApplicationTab.Screen
        name="Home"
        component={DashboardNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={size ?? 23}
              color={color}
            />
          ),
        }}
      />
      <ApplicationTab.Screen
        name="Assistant"
        component={AssistantNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="customerservice" size={size ?? 23} color={color} />
          ),
        }}
      />
      <ApplicationTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="person" size={size ?? 23} color={color} />
          ),
        }}
      />
    </ApplicationTab.Navigator>
  );
};
