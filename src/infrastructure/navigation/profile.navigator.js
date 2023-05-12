import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen } from "../../features/profile/screens/profile.screen";

const ProfileStack = createStackNavigator();
export const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="profileInfo" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};