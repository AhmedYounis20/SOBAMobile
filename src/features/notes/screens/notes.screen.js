import React from "react";
import styled from "styled-components";

import { NotesComponent } from "../components/notes.component";
import { ScreenView } from "../../../components/views/screenView.component";

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

const ScreenTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.white};
  margin: 0 1% 0 1%;
  padding: ${(props) => props.theme.space[3]};
`;

export default function Notes() {
  return (
    <ScreenView>
      <Background>
      <ScreenTitle>Notes</ScreenTitle>
      </Background>
      <NotesComponent />
    </ScreenView>
  );
}
