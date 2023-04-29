import React, { useContext } from "react";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../Components/SafeArea/SafeArea.Component";
import { Text } from "../../../Components/typography/text.component";
import { RestaurantInfoCard } from "../../restaurants/Components/restaurant-info-card.Component";
import styled from "styled-components";
import { Pressable, View } from "react-native";
const RestaurantsList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 10,
  },
})``;
export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <SafeArea>
      {favourites.length ? (
        <RestaurantsList
          data={favourites}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </Pressable>
            );
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <View style={{justifyContent:"center",width:"100%",flexDirection:"row"}}>
        <Text>No favourites found yet</Text>
        </View>
      )}
    </SafeArea>
  );
};
