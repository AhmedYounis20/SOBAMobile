import styled from "styled-components";
import { Topbar } from "../components/topbar.component";
import { React, useState } from "react";
import { SafeArea } from "../../components/SafeArea/SafeArea.Component";
import { SensorCardComponent } from "../components/sensorcard.component";

const TopContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const MidContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
`;

const BottomContainer = styled.View`
  flex: 1;
  background-color: gray;
`;

export const DashboardScreen = () => {
  
  return (
    <SafeArea>
      <TopContainer>
        <Topbar />
      </TopContainer>
      <MidContainer>
        <SensorCardComponent />
      </MidContainer>
      <BottomContainer />
    </SafeArea>
  );
};
