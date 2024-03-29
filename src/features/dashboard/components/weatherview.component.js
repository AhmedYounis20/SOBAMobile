import styled from "styled-components";
import { Text } from "../../../components/typography/text.component";
import { React, useContext, useState } from "react";
import { WeatherDataList } from "./weatherDatalist.component";
import { ScrollView } from "react-native";
import { TodayTemperature } from "./todaytemperature.component";
import { Icon, IconTypes } from "../../../components/Icons/Icons.components";
import { ThemeContext } from "../../../services/ThemeContext/Theme.context";

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

const DataText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.text.primary}
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
  const { theme } = useContext(ThemeContext);
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
              color= {theme.colors.ui.primary}
            />
            <Text variant="body">As Santa</Text>
          </LocationContainer>
          {/* remove low and high temp make it current only */}
          <TodayTemperature h="12" l="10" />
          <LocationContainer>
            <Icon
              iconType={IconTypes.Fontisto}
              name="cloudy"
              size={24}
              color={theme.colors.ui.primary}
            />
            <DataText>Cloudy</DataText>
          </LocationContainer>
        </DataContainer>
      </CardTop>
      <CardBottom>
        <WeatherDataList />
      </CardBottom>
    </WeatherView>
  );
};
