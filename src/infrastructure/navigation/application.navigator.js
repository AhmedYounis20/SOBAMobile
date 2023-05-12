import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DashboardNavigator } from "./dashboard.navigator";
import { AntDesign, FontAwesome, MaterialCommunityIcons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { ProfileNavigator } from "./profile.navigator";
import { AssistantNavigator } from "./assistant.navigator";

const ApplicationTab = createBottomTabNavigator();

export const ApplicationNavigator = () => {
  return (
    <ApplicationTab.Navigator screenOptions={({route}) => ({ headerShown: false,
        tabBarIcon:({focused,color,size})=>{
            
            if(route.name==="Home")
                return <MaterialCommunityIcons name="home-outline" size={size} color={color} />
            else if (route.name==="Assistant")
                return <AntDesign name="customerservice" size={size} color={color} />
            else if (route.name==="Profile")
                return <Octicons name="person" size={size} color={color} />
        }
    })}>
      <ApplicationTab.Screen name="Home" component={DashboardNavigator} />
      <ApplicationTab.Screen name="Assistant" component={AssistantNavigator} />
      <ApplicationTab.Screen name="Profile" component={ProfileNavigator} />
    </ApplicationTab.Navigator>
  );
};
