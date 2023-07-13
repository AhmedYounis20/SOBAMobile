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
          <NotificationTitle>{item.Title}</NotificationTitle>
        </View>
        <View>
          <NotificationBody>{item.Body}</NotificationBody>
        </View>
      </NotificationContent>
      <NotificationTimeContainer>
        <NotificationTimeValue>
          {item.Date.substring(10, 16)}
        </NotificationTimeValue>
      </NotificationTimeContainer>
    </NotificationContainer>
  );
};

export default DateNotifications;
