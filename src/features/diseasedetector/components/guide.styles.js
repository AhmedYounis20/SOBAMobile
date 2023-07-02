import { ImageBackground, Text } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components";

export const BulletDot = styled(Text)`
  color: #ffffff;
  font-size: 20px;
  margin-top: 10px;
  margin-right: 10px;
`;
export const BulletText = styled(Text)`
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0.6px;
  width: 85%;
  line-height: 22px;
  margin-vertical: 8px;
`;
export const BulletView = styled.View`
  flex-direction: row;
  justify-content: center;
`;
export const TitleText = styled(Text)`
  font-size: 18px;
  color: #ffffff;
  font-weight: 900;
  letter-spacing: 1px;
  text-align: center;
  margin-vertical: 30px;
`;
export const GuideButtonsView = styled.View`
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 60px;
  width: 100%;
  height: 100px;
`;

export const MainGuideButton = styled(Button)`
  width: 80%;
  background-color: #27ae60;
`;
export const Background = styled(ImageBackground)`
  height: 100%;
`;
