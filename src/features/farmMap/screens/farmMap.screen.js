import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Mapbox, {
  Camera,
  MapView,
  PointAnnotation,
  UserLocation,
} from "@rnmapbox/maps";
import * as Location from "expo-location";
import styled from "styled-components";
import { TextInput } from "react-native-paper";

Mapbox.setAccessToken(
  "pk.eyJ1IjoibW9oYW1lZGtoYXRhYiIsImEiOiJjbGpsYWtzM3MwcG9wM2ZsbnF1ZzIzZnVlIn0.IXyNY3NwkciEXVR1ByrDiw"
);

const MapContainer = styled.View`
  flex: 1;
`;

const Map = styled(MapView)`
  flex: 0.75;
`;

const CoordinatesText = styled.Text`
  font-size: 16px;
`;

const CoordinatesContainer = styled.View`
  position: absolute;
  top: 24px;
  left: 16px;
  background-color: white;
  border-radius: 4px;
  padding: 8px;
  elevation: 4;
`;

export default function FarmMap() {
  const [selectedCoordinates, setSelectedCoordinates] = useState([31, 30]);
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.error("Permission to access location was denied");

        return;
      }
      const currentLocation = await Location.getCurrentPositionAsync({});
      const location = currentLocation.coords;
      setSelectedCoordinates([location.longitude, location.latitude]);
    })();
  }, []);
  const handleMapPress = (event) => {
    setSelectedCoordinates(event.geometry.coordinates);
  };
  return (
    <MapContainer>
      <Map onPress={handleMapPress}>
        <Camera
          zoomLevel={15}
          centerCoordinate={selectedCoordinates}
          animationMode={"flyTo"}
          animationDuration={2000}
        />
        <PointAnnotation
          id="selectedLocation"
          coordinate={selectedCoordinates}
        />
        <UserLocation />
      </Map>
      <TextInput value={`${selectedCoordinates[0]}`} />

      {selectedCoordinates && (
        <CoordinatesContainer>
          <CoordinatesText>Latitude: {selectedCoordinates[1]}</CoordinatesText>
          <CoordinatesText>Longitude: {selectedCoordinates[0]}</CoordinatesText>
        </CoordinatesContainer>
      )}
    </MapContainer>
  );
}
