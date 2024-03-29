import styled from "styled-components";
import { Text } from "react-native";
import { Card } from "react-native-paper";
export const FansControlView = styled.View`
  flex-direction: row;
  width: 95%;
  justify-content: space-between;
  padding-left: 10px;
`;

export const LeftFanView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
`;
export const RightFanView = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 30px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 20px;
`;

export const CenterView = styled.View`
  height: auto;
  width: 100%;
  flex-direction: row;
`;

export const SliderText = styled(Text)`
  color: ${(props) => props.theme.colors.text.whiteBlack};
  font-weight: bold;
  font-size: 20px;
`;

export const ProgressCard = styled(Card)`
  height: 225px;
  width: 225px;
  align-self: center;
  border-radius: 200px;
  position: absolute;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const FanLabel = styled(Text)`
  font-size: 10px;
  color: ${(props) => props.theme.colors.text.whiteBlack};
`;

export const ProgressContainer = styled.View`
  margin-top: 30px;
  margin-left: 30px;
  justify-content: center;
`;
