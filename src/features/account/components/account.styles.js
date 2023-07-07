import styled from "styled-components";
import { Button } from "react-native-paper";
import { ImageBackground, Image, Text } from "react-native";
import { TextInput } from "react-native-paper";
export const AccountContainer = styled.View`
    background-color:rgba(255,255,255,0.3);
    padding:${(props) => props.theme.space[4]}
    margin-top:${(props) => props.theme.space[2]}
`;
export const AuthButton = styled(Button)`
  color: #27ae60;
  background-color: ${(props) => props.theme.colors.ui.primary};
  padding: ${(props) => props.theme.space[1]};
  width: 80%;
  border-radius: 10px;
`;

export const ErrorContainer = styled.View`
max-width:300px;
align-items:center;
align-slef:center;
margin-top:${(props) => props.theme.space[2]}
margin-bottom:${(props) => props.theme.space[2]}
`;
export const AnimationWrapper = styled.View`
  height: 40%;
  width: 100%;
  top: 30px;
  position: absolute;
  padding: ${(props) => props.theme.space[4]};
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

export const WhiteText = styled(Text)`
  color: #ffffff;
`;
export const Titletext = styled(Text)`
  font-size: 29px;
  color: #ffffff;
  font-weight: 800;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 30px;
`;

export const ContentText = styled(Text)`
  font-size: 15px;
  color: #ffffff;
  letter-spacing: 0.6px;
  text-align: center;
  width: 90%;
  line-height: 22px;
`;
export const CenterView = styled.View`
  align-items: center;
  margin-top: 9%;
`;

export const LoginBackGround = styled.View`
  background-color: #104828;
  height: 100%;
`;
export const PlantsView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 25%;
`;
export const FirstPlant = styled(Image)`
  height: 140px;
  width: 100px;
  top: 10px;
`;
export const SecondPlant = styled(Image)`
  height: 140px;
  width: 100px;
  margin-left: -20px;
`;
export const ThirdPlant = styled(Image)`
  height: 140px;
  width: 90px;
`;
export const FourthPlant = styled(Image)`
  top: 10px;
  height: 140px;
  width: 100px;
`;

export const FormView = styled.View`
  height: 75%;
  width: 100%;
  bottom: 0px;
  top: 10%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-horizontal: 20px;
  background-color: #ffffff;
`;
export const TitleView = styled.View`
  margin-top: 32px;
  left: 8px;
`;
export const Title = styled(Text)`
  font-size: 20px;
  font-weight: 800;
  color: black;
`;
export const WelocomeText = styled(Text)`
  font-size: 15px;
  font-weight: 700;
  color: gray;
`;
export const InputFieldsView = styled.View`
  width: 100%;
  align-items: center;
`;
export const InputFieldView = styled.View`
  width: 95%;
  background-color: gray;
  border-radius: 10px;
  padding: 2px;
  flex-direction: row;
  align-items: center;
`;
export const Input = styled(TextInput).attrs({
  mode: "flat",
  underlineColor: "transparent",
  outlineColor: "transparent",
  activeOutlineColor: "transparent",
  activeUnderlineColor: "rgba(0,0,0,0.54)",
})`
  background-color: transparent;
  width: 95%;
  left: 5px;
  marginright: 10px;
`;
export const PasswordInput = styled(Input)`
  background-color: transparent;
  width: 85%;
  left: 5px;
  margin-right: 10px;
`;
export const RememberForgotView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const RememberText = styled(Text)`
  color: black;
  font-weight: bold;
`;
export const ForgotText = styled(Text)`
  color: red;
  font-weight: bold;
`;
export const AuthButtonView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;
export const SeparaterView = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
`;
export const HairLineView = styled.View`
  width: 90px;
`;
