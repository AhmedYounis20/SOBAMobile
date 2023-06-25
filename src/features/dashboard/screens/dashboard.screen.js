import React from "react";
import styled from "styled-components";
import { Button } from "react-native-paper";
import { Notes } from "../components/notes.component";
import { Topbar } from "../components/topbar.component";
import { WeatherViewComponent } from "../components/weatherview.component";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import { GreenHouses } from "../components/greenhouses.component";
import { ScrollView, View } from "react-native";

const TopContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  margin-bottom: 30px;
`;

const MidContainer = styled.View`
  margin: ${(props) => props.theme.space[3]};
`;

const BottomContainer = styled.View`
  flex: 1;
  margin: 0 ${(props) => props.theme.space[3]};
`;

const GreenHousesText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: #008800;
`;

const Background = styled.View`
  height: 100px;
  width: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: #90ee90;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
`;

export const DashboardScreen = ({ navigation, theme }) => {
  return (
    <>
      <Background />
      <TopContainer>
        <SafeArea></SafeArea>
        <Topbar nav={navigation} />
      </TopContainer>
      <SafeArea>
        <ScrollView>
          <MidContainer>
            <WeatherViewComponent />
            {/* <Notes /> */}
          </MidContainer>
          <BottomContainer>
            <GreenHousesText>Your GreenHouses</GreenHousesText>
            <GreenHouses navigation={navigation} />
          </BottomContainer>
        </ScrollView>
      </SafeArea>
    </>
  );
};
