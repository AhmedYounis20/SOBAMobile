import { DashboardNavigator } from "./dashboard.navigator";
import {
  AntDesign,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { ProfileNavigator } from "./profile.navigator";
import { AssistantNavigator } from "./assistant.navigator";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useContext } from "react";
import { ThemeContext } from "../../services/ThemeContext/Theme.context";
const ApplicationTab = createMaterialTopTabNavigator();

export const ApplicationNavigator = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <ApplicationTab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.text.primary,
        tabBarInactiveTintColor: theme.colors.text.disabled,
        tabBarIconStyle: {
          fontWeight: 700,
          fontSize: 50,
        },
        tabBarShowLabel: false,
        tabBarIndicatorStyle: { height: 0 },
        tabBarStyle: {
          backgroundColor: theme.colors.bg.secondary,
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
