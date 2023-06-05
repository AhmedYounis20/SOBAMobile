import { Card } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import styled from "styled-components";
import { Text } from "../../../components/typography/text.component";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { React, useState } from "react";
import { WeatherDataList } from "./weatherDatalist.component";
import { View, StyleSheet, ScrollView } from "react-native";
import { TodayTemperature } from "./todaytemperature.component";
import { Icon, IconTypes } from "../../../components/Icons/Icons.components";

const WeatherIcon = styled.Image`
  width: 89px;
  height: 89px;
`;

const WeatherView = styled.View`
  margin: ${(props) => props.theme.space[0]};
`;

const LocationContainer = styled.View`
  flex-direction: row;
  gap: 4px;
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

const CardBottom = styled(ScrollView).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex-direction: row;
`;

const TemperatureContainer = styled.View``;

const WeatherIconContainer = styled.View`
  justify-content: center;
  margin: 10px 20px;
`;

const DataContainer = styled.View`
  flex: 1;
  justify-content: center;
  gap: 10px;
  margin-left: 10px;
  padding-top: ${(props) => props.theme.space[2]};
`;

export const WeatherViewComponent = () => {
  return (
    <WeatherView>
      <CardTop>
        <WeatherIconContainer>
          <WeatherIcon source={require("../../../../assets/cloudy.png")} />
        </WeatherIconContainer>
        <DataContainer>
          <LocationContainer>
            <Icon
              iconType={IconTypes.MaterialIcons}
              name="location-pin"
              size={24}
              color="#008800"
            />
            <Text variant="body">As Santa</Text>
          </LocationContainer>
          <TodayTemperature h="12" l="10" />
          <LocationContainer>
            <Icon
              iconType={IconTypes.Fontisto}
              name="cloudy"
              size={24}
              color="#008800"
            />
            <Text variant="body">Cloudy</Text>
          </LocationContainer>
        </DataContainer>
      </CardTop>
      <CardBottom>
        <WeatherDataList />
      </CardBottom>
    </WeatherView>
  );
};
