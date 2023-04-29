import React, { useState } from "react";
import { List, Text } from "react-native-paper";
import { ScrollView } from "react-native";
import { RestaurantInfoCard } from "../Components/restaurant-info-card.Component";
import { SafeArea } from "../../../Components/SafeArea/SafeArea.Component";
export const RestaurantDetialsScreen = ({ route }) => {
  const [breakfastExpanded, setBreakFastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinkExpanded, setDrinkExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakFastExpanded(!breakfastExpanded)}
            
        >
          <List.Item
            title="omlet Eggs"
            description="eggs cooked with oil or butter in a pan"
          />
          <List.Item title="beans" description="egyption food" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="burger" />
          <List.Item title="Pizza" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item
            title="omlet Eggs"
            description="eggs cooked with oil or butter in a pan"
          />
          <List.Item
            title="omlet Eggs"
            description="eggs cooked with oil or butter in a pan"
          />
          <List.Item
            title="omlet Eggs"
            description="eggs cooked with oil or butter in a pan"
          />
        </List.Accordion>
        <List.Accordion
          title="Drink"
          left={(props) => <List.Icon {...props} icon="tea" />}
          expanded={drinkExpanded}
          onPress={() => setDrinkExpanded(!drinkExpanded)}
        ></List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
