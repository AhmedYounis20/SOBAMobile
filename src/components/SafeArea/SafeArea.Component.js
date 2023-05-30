import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";
import { View } from "react-native";
export const Safe = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

export const SafeArea = ({ children }) => {
  return <Safe>{children}</Safe>;
};
