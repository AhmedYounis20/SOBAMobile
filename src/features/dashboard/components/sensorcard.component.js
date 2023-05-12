import { Card } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import styled from "styled-components";
import { Text } from "../../../components/typography/text.component";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { React, useState } from "react";
import { SensorsList } from "./sensorslist.component";
import { View, StyleSheet,ScrollView } from "react-native";
import { TodayTemperature } from "./todaytemperature.component";

const SensorCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin: ${(props) => props.theme.space[2]};
`;

const LocationContainer = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]};
`;

const CurrentTemperature = styled.Text`
  padding: ${(props) => props.theme.space[2]};
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const CardTop = styled.View`
  flex-direction: row;
`;

const CardBottom = styled(ScrollView).attrs(
{
  horizontal:true,
  showsHorizontalScrollIndicator:false
}
)`
  flex-direction: row;
`;

const TemperatureContainer = styled.View`
  flex-direction: row;
`;

const DataContainer = styled.View``;

const WeatherIconContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  padding-top: ${(props) => props.theme.space[2]};
`;

export const SensorCardComponent = () => {
  return (
    <SensorCard>
      <CardTop>
        <DataContainer>
          <LocationContainer>
            <Spacer position="right" size="small">
              <MaterialIcons name="location-pin" size={24} color="black" />
            </Spacer>
            <Text variant="body">As Santa</Text>
          </LocationContainer>
          <TemperatureContainer>
            <CurrentTemperature>17°C</CurrentTemperature>
            <TodayTemperature h="12" l="10" />
          </TemperatureContainer>
        </DataContainer>
        <WeatherIconContainer>
          <MaterialCommunityIcons
            name="weather-pouring"
            size={100}
            color="black"
          />
        </WeatherIconContainer>
      </CardTop>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
          width:"90%",
          alignSelf:"center"
        }}
      />
      <CardBottom>
        <SensorsList />
      </CardBottom>
    </SensorCard>
  );
};
