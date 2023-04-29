import React, { useContext, useState, useEffect } from "react";
import { Text, View } from "react-native";
import { SafeArea } from "../../../Components/SafeArea/SafeArea.Component";
import MapView,{Marker,Callout} from "react-native-maps";
import styled from "styled-components";
import { Search } from "../components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantInfoCard } from "../../restaurants/Components/restaurant-info-card.Component";
import { CompactRestaurantInfo } from "../../restaurants/Components/compact-restaurant-info.component";
const Map = styled(MapView)`
  flex: 1;
`;

export const MapScreen = ({navigation}) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);

  const { viewport } = location;
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestlat = viewport.southwest.lat;
    const latDelta = northeastLat - southwestlat;
    setLatDelta(latDelta);
  }, [location, latDelta]);
  return (
    <SafeArea>
      <Search />
      <Map
        region={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return <Marker key={restaurant.name} title={restaurant.name} 
          coordinate={{
            latitude: restaurant.geometry.location.lat,
            longitude: restaurant.geometry.location.lng
          }}
                    >
            <Callout onPress={()=>{navigation.navigate("RestaurantDetail",{restaurant:restaurant})}}>             
                  <CompactRestaurantInfo restaurant={restaurant} isMap={true}/>
            </Callout>
          </Marker>;
          
        })}
      </Map>
    </SafeArea>
  );
};
