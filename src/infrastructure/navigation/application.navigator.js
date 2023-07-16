import { DashboardNavigator } from "./dashboard.navigator";
import {
  AntDesign,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { ProfileNavigator } from "./profile.navigator";
import { AssistantNavigator } from "./assistant.navigator";
import { createStackNavigator } from "@react-navigation/stack";
import { useContext } from "react";
import { ThemeContext } from "../../services/ThemeContext/Theme.context";
const ApplicationStack = createStackNavigator();

export const ApplicationNavigator = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <ApplicationStack.Navigator screenOptions={{ headerShown: false }}>
      <ApplicationStack.Screen name="Home" component={DashboardNavigator} />
      <ApplicationStack.Screen
        name="Assistant"
        component={AssistantNavigator}
      />
      <ApplicationStack.Screen name="Profile" component={ProfileNavigator} />
    </ApplicationStack.Navigator>
  );
};
