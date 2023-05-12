import { createStackNavigator } from "@react-navigation/stack";
import { AssistantScreen } from "../../features/assistant/screens/assistant.screen";

const AssistantStack= createStackNavigator();

export const AssistantNavigator=()=>{
    return (
        <AssistantStack.Navigator screenOptions={{headerShown:false}} >
            <AssistantStack.Screen name="assistant" component={AssistantScreen} />
        </AssistantStack.Navigator>
    )
}