import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

const GreenHouseCard = styled(Card)`
  margin: 20px 0px;
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
  color: lightgray;
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const GreenHouseText = styled.Text`
  color: white;
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const GreenHouseName = styled.View`
  background-color: #008800;
  position: absolute;
  padding: 5px 10px;
  border-radius: 16px;
  top: 10px;
  left: 10px;
`;

export const GreenHouses = ({ navigation }) => {
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
              <Ionicons name="md-sunny" size={32} color="black" />
              <SensorValue>59%</SensorValue>
            </SensorRead>
            <SensorRead>
              <Ionicons name="md-sunny" size={32} color="black" />
              <SensorValue>59%</SensorValue>
            </SensorRead>
            <SensorRead>
              <Ionicons name="md-sunny" size={32} color="lightgray" />
              <DisabledSensorValue>off</DisabledSensorValue>
            </SensorRead>
            <SensorRead>
              <Ionicons name="md-sunny" size={32} color="lightgray" />
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
              <Ionicons name="md-sunny" size={32} color="black" />
              <SensorValue>59%</SensorValue>
            </SensorRead>
            <SensorRead>
              <Ionicons name="md-sunny" size={32} color="black" />
              <SensorValue>59%</SensorValue>
            </SensorRead>
            <SensorRead>
              <Ionicons name="md-sunny" size={32} color="lightgray" />
              <DisabledSensorValue>off</DisabledSensorValue>
            </SensorRead>
            <SensorRead>
              <Ionicons name="md-sunny" size={32} color="lightgray" />
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
