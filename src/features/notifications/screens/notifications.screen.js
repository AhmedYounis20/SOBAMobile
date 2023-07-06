import {} from "react-native";
import { View, Text, Platform } from "react-native";
import styled from "styled-components";
import {} from "react-native";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import { useState, useEffect } from "react";
import DistinctDates from "../components/distinctDates.component";
import DateNotifications from "../components/dateNotification.component";
import {
  Background,
  NotificationsTitle,
} from "../components/notifications.styles";

export const NotificationScreen = () => {
  const [OrderedNotifications, setOrderedNofications] = useState({});

  const Notifications = [
    {
      title: "You have been assigned a new conversation.",
      body: "Conversation assigned",
      date: "NOV 16, 2022 WED",
    },
    {
      title: "Hello",
      body: "app-release-neeto: Visitor sent a message",
      date: "NOV 16, 2022 WED",
    },
    {
      title: "A new ticket has been opened by Visitor",
      body: "app-release-neeto: Visitor opened 5 days ago new ticket",
      date: "NOV 15, 2022 WED",
    },
    {
      title: "You have been assigned a new conversation.",
      body: "Conversation assigned",
      date: "NOV 9, 2022 WED",
    },
  ];

  useEffect(() => {
    const groupedByDate = groupedData();
    setOrderedNofications(groupedByDate);
  }, []);

  const groupedData = () => {
    const test = Notifications.reduce((result, notification) => {
      const key = notification.date;

      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(notification);

      return result;
    }, {});

    return test;
  };
  // const distinctDates = [...new Set(Notifications.map((item) => item.date))];
  const distinctDates = Object.keys(OrderedNotifications);
  return (
    <SafeArea>
      <Background>
        <NotificationsTitle>Notifications</NotificationsTitle>
      </Background>
      <View>
        {distinctDates.map((date, idx) => (
          <View key={idx}>
            <DistinctDates date={date} />
            {OrderedNotifications[date].map((item, idx) => (
              <DateNotifications idx={idx} item={item} />
            ))}
          </View>
        ))}
      </View>
    </SafeArea>
  );
};
