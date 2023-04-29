import React from "react";
import { StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../Components/spacer/spacer.component";
import { Text } from "../../../Components/typography/text.component";
import {
  Icon,
  Rating,
  Info,
  RestaurantCard,
  RestaurantCardCover,
  Section,
  SectionEnd,
  Address,
} from "./restaurant-info-card.styles";
import { Favourite } from "../../../Components/favourite/favourite.component";
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant}/>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((item, index) => (
              <SvgXml xml={star} height={25} width={25} key={ `start-${placeId}-${index}`} />
            ))}
          </Rating>
          <SectionEnd style={styles.opened}>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            {isOpenNow && (
              <Spacer position="left" size="large">
                <SvgXml xml={open} height={25} width={25} />
              </Spacer>
            )}
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

const styles = StyleSheet.create({
  opened: {
    justifyContent: "flex-end",
  },
});
