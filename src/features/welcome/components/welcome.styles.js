import styled from "styled-components";
import { ImageBackground, Text } from "react-native";

export const CenterView = styled.View`
  align-items: center;
`;
export const RowView = styled.View`
  flex-direction: row;
`;
export const CenterRow = styled(RowView)`
  align-items: center;
`;
export const HeaderView = styled(CenterRow)`
  justify-content: space-between;
`;

export const LogoView = styled.View`
  position: absolute;
  margin-left: 42%;
  margin-bottom: 60%;
`;

export const WelcomeText = styled(Text)`
  font-size: 29px;
  color: #27ae60;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-align: center;
  width: 97%;
`;

export const ContentText = styled(Text)`
  font-size: 15px;
  color: #27ae60;
  letter-spacing: 0.6px;
  width: 92%;
  line-height: 20px;
  text-align: center;
`;
export const TextContainer = styled(CenterView)`
  margin-top: 9%;
`;

export const NavigationContainer = styled(CenterRow)`
  justify-content: space-between;
  margin-top: 30px;
  position: absolute;
  left: 30px;
  bottom: 60px;
  width: 90%;
`;
export const DotContainer = styled(RowView)`
  align-items: center;
`;

export const PrevView = styled.View`
  width: 35px;
  max-width: 35px;
  min-width: 35px;
`;

export const SleepDot = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: #414141;
  margin-horizontal: 3px;
`;
export const WakeDot = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: #ffffff;
  margin-horizontal: 3px;
`;
export const NextText = styled(Text)`
  color: #ffffff;
  margin-right: 8%;
`;
export const BackGround = styled(ImageBackground)`
  height: 100%;
`;
