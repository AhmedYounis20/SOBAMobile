import styled from "styled-components";

export const ItemsCenter = styled.View`
  align-items: center;
`;

export const Background = styled.View`
  height: ${Platform.OS == "android" ? "12%" : "14%"};
  width: 100%;
  top: 0px;
  right: 0px;
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  justify-content: center;
`;
export const SupportTitle = styled.Text`
font-family : ${(props) => props.theme.fonts.title}
font-size: ${(props) => props.theme.fontSizes.title};
color: ${(props) => props.theme.colors.text.white};
margin-left:8%
`;

export const SentBox = styled.View`
  position: absolute;
  width: 70%;
  height: 15%;
  background-color: ${(props) => props.theme.colors.ui.primary};
  z-index: 5;
  border-radius: 12px;
  align-self: center;

  top: 35%;
  justify-content: center;
`;

export const SuccessfullySentContainer = styled.View`
  align-items: center;

  padding-vertical: 5%;
`;

export const SuccessfullySentText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
`;
export const SuccessfullySentOk = styled.Text`
  font-size: 14px;
  font-weight: 700;
`;
export const FieldContainer = styled.View`
  padding-vertical: 2%;
`;

export const FieldTextContainer = styled.View`
  align-items: center;
  margin-left: 5%;
  padding-bottom: 4%;
  flex-direction: row;
`;
export const InputLabel = styled.Text`
  font-size: 17px;
  font-weight: 600;
  margin-right: 1%;
  color: ${(props) => props.theme.colors.text.disabled};
`;

export const InputFieldContainer = styled.View`
  width: 90%;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  border-radius: 10px;
  align-self: center;
`;
export const DiscribtionContainer = styled(FieldContainer)`
  height: 30%;
`;
export const DiscribtionInputFieldContainer = styled(InputFieldContainer)`
  height: 80%;
`;

export const SendContainer = styled.TouchableOpacity`
  padding: 2.5%;
  background-color: ${(props) => props.theme.colors.ui.primary};
  width: 90%;
  align-self: center;
  border-radius: 25px;
  align-items: center;
`;

export const SendText = styled.Text`
  font-size: 18px;
  letter-spacing: 0.5px;
  color: white;
`;
