import styled from "styled-components";
import { Button } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const AccountContainer = styled.View`
    background-color:rgba(255,255,255,0.3);
    padding:${(props) => props.theme.space[4]}
    margin-top:${(props) => props.theme.space[2]}
`;
export const AuthButton = styled(Button).attrs({
  color: (props) => props.theme.colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[1]};
  border-radius: 30px;
`;
export const Title = styled(Text)`
  font-size: 30px;
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
