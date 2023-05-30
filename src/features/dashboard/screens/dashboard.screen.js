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
  margin: ${(props) => props.theme.space[3]};
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

export const DashboardScreen = ({ navigation }) => {
  return (
    <>
      <SafeArea>
        <TopContainer>
          <Topbar nav={navigation} />
        </TopContainer>
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
