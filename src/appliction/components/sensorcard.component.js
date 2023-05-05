import { Card } from "react-native-paper";
import { Spacer } from "../../components/spacer/spacer.component";
import styled from "styled-components";
import { Text } from "../../components/typography/text.component";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { React, useState } from "react";

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

const CardTop = styled.View``;

const CardBottom = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const SensorReadView = styled.View`
  flex: 1;
  margin: ${(props) => props.theme.space[2]};
`;

const SensorRead = ({ property = "Humidity", value = "30%" }) => {
  return (
    <>
      <Text variant="body">{property}</Text>
      <Text variant="label">{value}</Text>
    </>
  );
};
export const SensorCardComponent = () => {
  return (
    <SensorCard>
      <CardTop>
        <LocationContainer>
          <Spacer position="right" size="small">
            <MaterialIcons name="location-pin" size={24} color="black" />
          </Spacer>
          <Text variant="body">As Santa</Text>
          <Spacer position="left" size="xl" />
          <MaterialCommunityIcons
            name="weather-pouring"
            size={24}
            color="black"
          />
        </LocationContainer>
        <>
          <CurrentTemperature>17°C</CurrentTemperature>
          <></>
        </>
      </CardTop>
      <></>
      <CardBottom>
        <>
          <SensorReadView>
            <SensorRead />
          </SensorReadView>
          <SensorReadView>
            <SensorRead property="Precpitation" value="5.1mL" />
          </SensorReadView>
          <SensorReadView>
            <SensorRead property="Pressure" value="450hPa" />
          </SensorReadView>
          <SensorReadView>
            <SensorRead property="Wind" value="23m/s" />
          </SensorReadView>
        </>
      </CardBottom>
    </SensorCard>
  );
};
