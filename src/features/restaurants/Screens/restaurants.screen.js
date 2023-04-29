import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../Components/restaurant-info-card.Component";
import styled from "styled-components";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../Components/search.component";
import { Pressable } from "react-native";
import { SafeArea } from "../../../Components/SafeArea/SafeArea.Component";
import { Spacer } from "../../../Components/spacer/spacer.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FavouriteBar } from "../../../Components/favourite/favouritebar.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { FadeInView } from "../../../Components/animations/animation.component";

const ListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[0]};
`;
const RestaurantsList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Loading = styled(ActivityIndicator).attrs({
  color: "violet",
  size: 50,
  animating: true,
})``;
export const RestaurantsScreen = ({ navigation }) => {
  const restaurantsContext = useContext(RestaurantsContext);
  const favouritesContext = useContext(FavouritesContext);
  const [isFavouritesToggled, setIsFavouritesToggled] = useState(false);

  const { user, isAuthenticated } = useContext(AuthenticationContext);
  useEffect(() => console.log("user", user), []);
  useEffect(() => console.log("isAuth", isAuthenticated), []);

  useEffect(() => console.log(favouritesContext.favourites), []);

  return (
    <SafeArea style={{ backgroundColor: "white" }}>
      <Search
        isFavouritesToggled={isFavouritesToggled}
        onFavouritesToggled={() => setIsFavouritesToggled(!isFavouritesToggled)}
      />
      {restaurantsContext.isLoading && (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
      {isFavouritesToggled && <FavouriteBar />}
      <ListContainer>
        <RestaurantsList
          showsVerticalScrollIndicator={false}
          data={restaurantsContext.restaurants}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: item })
                }
              >
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </Pressable>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </ListContainer>
    </SafeArea>
  );
};
