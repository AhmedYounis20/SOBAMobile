import React from "react";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import { NotesComponent } from "../components/notes.component";
import styled from "styled-components";
import { Platform } from "react-native";

const Background = styled.View`
  height: ${Platform.OS == "android" ? "12%": "14%"};
  width: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
`;

export default function Notes() {
  return (
    <SafeArea>
      <Background />
      <NotesComponent />
    </SafeArea>
  );
}