import { createStackNavigator,TransitionPreset, TransitionPresets } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/Screens/restaurants.screen";
import { RestaurantDetialsScreen } from "../../features/restaurants/Screens/restaurant-details.Screen";
const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{headerShown:false ,
    ...TransitionPresets.ModalSlideFromBottomIOS,gestureEnabled:true
    }}>
      <RestaurantStack.Screen
        name="restaurants"
        component={RestaurantsScreen} 
      />
      <RestaurantStack.Screen
      name="RestaurantDetail"
      component={RestaurantDetialsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
