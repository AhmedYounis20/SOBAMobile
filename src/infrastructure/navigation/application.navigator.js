import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DashboardNavigator } from "./dashboard.navigator";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { ProfileNavigator } from "./profile.navigator";
import { AssistantNavigator } from "./assistant.navigator";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeArea } from "../../components/SafeArea/SafeArea.Component";

const ApplicationTab = createMaterialTopTabNavigator();

export const ApplicationNavigator = () => {
  return (
    <SafeArea>
      <ApplicationTab.Navigator 

      tabBarPosition="bottom" 
      screenOptions={{
        tabBarActiveTintColor: "powderblue",
        tabBarInactiveTintColor:"gray",
        tabBarStyle:{
            height:50,
            marginBottom:10,
            borderRadius:40,
            width:"85%",
            alignSelf:"center",
            position:"absolute",
            bottom:10,

        },
        tabBarIconStyle:{
            fontWeight:700,
            fontSize:50,
            
        },
        tabBarShowLabel:false,
        tabBarIndicatorStyle:{height:0},
        tabBarContentContainerStyle:{
          borderRadius:50
        }
      
      }}  >
        <ApplicationTab.Screen
          name="Home"
          component={DashboardNavigator}
          options={{
            tabBarIcon: ({focused,color, size }) => (
              <MaterialCommunityIcons
                name="home-outline"
                size={size ??23}
                color={color}
              />
            ),
          }}
        />
        <ApplicationTab.Screen
          name="Assistant"
          component={AssistantNavigator}
          options={{
            tabBarIcon: ({ focused,color ,size}) => (
              <AntDesign name="customerservice" size={size ??23} color={color} />
            ),
          }}
        />
        <ApplicationTab.Screen
          name="Profile"
          component={ProfileNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="person" size={size ??23} color={color} />
            ),
          }}
        />
      </ApplicationTab.Navigator>
    </SafeArea>
  );
};
