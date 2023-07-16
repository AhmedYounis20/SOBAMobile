import React, { useContext, useState, useEffect } from "react";
import { Text, View } from "react-native";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
// import MapView, { Marker, Callout } from "react-native-maps";
import styled from "styled-components";
import { CompactGreenhouseInfo } from "../components/compactGreenhouse.component";

// const Map = styled(MapView)`
//   flex: 1;
// `;

const greenhouses = [
  {
    name: "greenhouse1",
    lang: 41,
    lat: 50,
  },
  {
    name: "greenhouse2",
    lang: 30,
    lat: 31,
  },
];

export const FarmMap = ({ navigation }) => {
  return (
    <View></View>
    // <Map
    //   region={{
    //     latitude: 31,
    //     longitude: 30,
    //     latitudeDelta: 2,
    //     longitudeDelta: 0.02,
    //   }}
    // >
    //   {greenhouses.map((g) => {
    //     return (
    //       <Marker
    //         key={g.name}
    //         title={g.name}
    //         coordinate={{
    //           latitude: g.lat,
    //           longitude: g.lang,
    //         }}
    //         region={{
    //           latitude: g.lat,
    //           longitude: g.lang,
    //           latitudeDelta: 0.001, // Zoom level (adjust as needed)
    //           longitudeDelta: 0.001, // Zoom level (adjust as needed)
    //         }}
    //       >
    //         <Callout
    //           onPress={() => {
    //             navigation.navigate("Greenhouse");
    //           }}
    //         >
    //           <CompactGreenhouseInfo greenhouse={g.name} isMap={true} />
    //         </Callout>
    //       </Marker>
    //     );
    //   })}
    // </Map>
  );
};
