import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";
import { View } from "react-native";
import { useContext, useState } from "react";
import { ThemeContext } from "../../services/ThemeContext/Theme.context";
export const Safe = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `padding-top:${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const SafeArea = ({ children }) => {
  return <Safe>{children}</Safe>;
};
