import styled from "styled-components";
import { Topbar } from "../components/topbar.component";
import { React, useState } from "react";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import { SensorCardComponent } from "../components/sensorcard.component";
import { Notes } from "../components/notes.component";
import { Button } from "react-native-paper";

const TopContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const MidContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

const BottomContainer = styled.View`
  flex: 1;
  
`;

export const DashboardScreen = ({ navigation }) => {
  return (
    <SafeArea style={{backgroundColor:(props)=>props.theme.colors.bg.primary}}>
      <TopContainer>
        <Topbar nav={navigation} />
      </TopContainer>
      <MidContainer>
        <SensorCardComponent />
      <Button onPress={()=>navigation.navigate("Greenhouse")} >Going to Green House</Button>
        <Notes />
      </MidContainer>
      <BottomContainer />
    </SafeArea>
  );
};
