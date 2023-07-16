import { createStackNavigator } from "@react-navigation/stack";
import { AssistantScreen } from "../../features/statistics/screens/statistics.screen";

const AssistantStack = createStackNavigator();

export const AssistantNavigator = () => {
  return (
    <AssistantStack.Navigator screenOptions={{ headerShown: false }}>
      <AssistantStack.Screen name="assistant" component={AssistantScreen} />
    </AssistantStack.Navigator>
  );
};
