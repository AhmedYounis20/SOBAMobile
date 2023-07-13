import React, { useContext } from "react";
import styled from "styled-components";
import { Topbar } from "../components/topbar.component";
import { WeatherViewComponent } from "../components/weatherview.component";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import { GreenHouses } from "../components/greenhouses.component";
import { ScrollView,StatusBar, View, TouchableOpacity, SafeAreaView } from "react-native";
import {  } from "expo-status-bar";
import { ThemeContext } from "../../../services/ThemeContext/Theme.context";
import { ScreenView } from "../../../components/views/screenView.component";
import { Button } from "react-native-paper";

const TopContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  padding-bottom: 0px;
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
  color: ${(props) => props.theme.colors.text.primary};
`;

const Background = styled.View`
  height: 8%;
  width: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
`;
const AddNoteButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.ui.primary};
  margin-bottom: ${(props) => props.theme.space[4]};
`;
export const DashboardScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={theme.colors.ui.primary} />
      <Background />
      <TopContainer>
        <Topbar nav={navigation} />
      </TopContainer>
      <ScrollView style={{ backgroundColor: theme.colors.bg.primary, marginBottom:64 }}>
        <MidContainer>
          <WeatherViewComponent />
        </MidContainer>
        <BottomContainer>
          <GreenHousesText>Your GreenHouses</GreenHousesText>
          <GreenHouses navigation={navigation} />
          <AddNoteButton
            icon="plus-circle"
            mode="contained"
            onPress={() => navigation.navigate("AddGreenHouse")}
          >
            Add Greenhouse
          </AddNoteButton>
        </BottomContainer>
      </ScrollView>
    </SafeAreaView>
  );
};
