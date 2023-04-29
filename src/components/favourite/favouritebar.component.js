import { useContext } from "react";
import { FlatList, ScrollView, Text, View,Image } from "react-native";
import styled from "styled-components";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { CompactRestaurantInfo } from "../../features/restaurants/Components/compact-restaurant-info.component";
import { RestaurantInfoCard } from "../../features/restaurants/Components/restaurant-info-card.Component";
const FavouriteWrapper = styled.View`
  padding: 10px;
`;

export const FavouriteBar = () => {
  const { favourites } = useContext(FavouritesContext);
  return (
    <FavouriteWrapper>
        <Text  style={{fontSize:18,fontWeight:"bold",fontStyle:"italic",marginLeft:5}}>Favourites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          return (
            <View key={restaurant.name} >
              <CompactRestaurantInfo  restaurant={restaurant} />
            </View>
          );
        })}
      </ScrollView>
    </FavouriteWrapper>
  );
};
