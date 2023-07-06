import { View } from "react-native";
import styled from "styled-components";
import {
  NotificationBody,
  NotificationContainer,
  NotificationContent,
  NotificationTimeContainer,
  NotificationTimeValue,
  NotificationTitle,
} from "./notifications.styles";
const DateNotifications = ({ item, idx }) => {
  return (
    <NotificationContainer key={idx}>
      <NotificationContent>
        <View>
          <NotificationTitle>{item.title}</NotificationTitle>
        </View>
        <View>
          <NotificationBody>{item.body}</NotificationBody>
        </View>
      </NotificationContent>
      <NotificationTimeContainer>
        <NotificationTimeValue>last date</NotificationTimeValue>
      </NotificationTimeContainer>
    </NotificationContainer>
  );
};

export default DateNotifications;
