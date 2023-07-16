import styled from "styled-components";

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

export const NotificationsTitle = styled.Text`
font-family : ${(props) => props.theme.fonts.title}
font-size: ${(props) => props.theme.fontSizes.title};
color: ${(props) => props.theme.colors.text.white};
margin-left:8%
`;

export const DateContainer = styled.View`
  padding-left: 6%;
  margin-top: 5%;
`;

export const DateText = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const NotificationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-horizontal: 6%;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  border-radius: 12px;
  margin-top: 15px;
`;

export const NotificationContent = styled.View`
  padding-horizontal: 4%;
`;

export const NotificationTitle = styled.Text`
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const NotificationBody = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  padding-bottom: 5px;
  width: 90%;
`;

export const NotificationTimeContainer = styled.View`
  position: absolute;
  right: 2%;
  bottom: 2%;
`;

export const NotificationTimeValue = styled.Text`
  color: ${(props) => props.theme.colors.text.disabled};
  padding-bottom: 5px;
`;
