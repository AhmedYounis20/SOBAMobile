import React, { useContext } from "react";
import styled from "styled-components";
import { Topbar } from "../components/topbar.component";
import { WeatherViewComponent } from "../components/weatherview.component";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import { GreenHouses } from "../components/greenhouses.component";
import { ScrollView, StatusBar, View,TouchableOpacity } from "react-native";
import { ThemeContext } from "../../../services/ThemeContext/Theme.context";

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
  height: 100px;
  width: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
`;

export const DashboardScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <SafeArea>
      <Background />
      <TopContainer>
        <Topbar nav={navigation} />
      </TopContainer>
      <ScrollView style={{ backgroundColor: theme.colors.bg.primary }}>
        <MidContainer>
          <WeatherViewComponent />
          {/* <Notes /> */}
        </MidContainer>
        <BottomContainer>
          <TouchableOpacity onPress={()=>navigation.navigate("AddGreenHouse")}>
            <GreenHousesText>Your GreenHouses</GreenHousesText>
          </TouchableOpacity>
          <GreenHouses navigation={navigation} />
        </BottomContainer>
      </ScrollView>
    </SafeArea>
  );
};
