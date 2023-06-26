import { Ionicons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { Icon, IconTypes } from "../../../components/Icons/Icons.components";
import { ThemeContext } from "../../../services/ThemeContext/Theme.context";

const GreenHouseCard = styled(Card)`
  margin: 20px 0px;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const GreenHouseCover = styled.Image`
  height: 150px;
  object-fit: cover;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`;

const SensorReads = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 20px;
`;

const SensorRead = styled.View`
  gap: 5px;
  align-items: center;
`;

const SensorValue = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const DisabledSensorValue = styled.Text`
  color: ${(props) => props.theme.colors.text.disabled};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const GreenHouseText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const GreenHouseName = styled.View`
  background-color: ${(props) => props.theme.colors.ui.primaryTransparent};
  position: absolute;
  padding: 5px 10px;
  border-radius: 16px;
  top: 10px;
  left: 10px;
`;

export const GreenHouses = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate("Greenhouse")}>
        <GreenHouseCard>
          <GreenHouseCover
            source={{
              uri: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/image6-4.jpg",
            }}
          />
          <SensorReads>
            <SensorRead>
              <Icon
                iconType={IconTypes.Ionicons}
                name="md-sunny"
                size={32}
                color={theme.colors.text.secondary}
              />
              <SensorValue>59%</SensorValue>
            </SensorRead>
            <SensorRead>
              <Icon
                iconType={IconTypes.Ionicons}
                name="md-sunny"
                size={32}
                color={theme.colors.text.secondary}
              />
              <SensorValue>59%</SensorValue>
            </SensorRead>
            <SensorRead>
              <Icon
                iconType={IconTypes.Ionicons}
                name="md-sunny"
                size={32}
                color={theme.colors.text.disabled}
              />
              <DisabledSensorValue>off</DisabledSensorValue>
            </SensorRead>
            <SensorRead>
              <Icon
                iconType={IconTypes.Ionicons}
                name="md-sunny"
                size={32}
                color={theme.colors.text.disabled}
              />
              <DisabledSensorValue>off</DisabledSensorValue>
            </SensorRead>
          </SensorReads>
          <GreenHouseName>
            <GreenHouseText>Greenhouse 1</GreenHouseText>
          </GreenHouseName>
        </GreenHouseCard>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Greenhouse")}>
        <GreenHouseCard>
          <GreenHouseCover
            source={{
              uri: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/image6-4.jpg",
            }}
          />
          <SensorReads>
            <SensorRead>
              <Icon
                iconType={IconTypes.Ionicons}
                name="md-sunny"
                size={32}
                color="black"
              />
              <SensorValue>59%</SensorValue>
            </SensorRead>
            <SensorRead>
              <Icon
                iconType={IconTypes.Ionicons}
                name="md-sunny"
                size={32}
                color={theme.colors.text.secondary}
              />
              <SensorValue>59%</SensorValue>
            </SensorRead>
            <SensorRead>
              <Icon
                iconType={IconTypes.Ionicons}
                name="md-sunny"
                size={32}
                color={theme.colors.text.disabled}
              />
              <DisabledSensorValue>off</DisabledSensorValue>
            </SensorRead>
            <SensorRead>
              <Icon
                iconType={IconTypes.Ionicons}
                name="md-sunny"
                size={32}
                color={theme.colors.text.disabled}
              />
              <DisabledSensorValue>off</DisabledSensorValue>
            </SensorRead>
          </SensorReads>
          <GreenHouseName>
            <GreenHouseText>Greenhouse 1</GreenHouseText>
          </GreenHouseName>
        </GreenHouseCard>
      </TouchableOpacity>
    </>
  );
};
