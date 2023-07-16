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
      Id: "DBDC177C-ADA8-4A27-BA92-49F6C328F27A",
      Title: "from api topic",
      Body: "hello",
      Date: "2023-07-09 03:25:57.8713916",
      CreatedDate: "2023-07-09 00:25:58.8506774",
      LastModifiedDate: "2023-07-09 00:27:42.8900673",
    },
    {
      Id: "E1C4D768-3530-4B0D-93CD-79B38FF6219A",
      Title: "from api token",
      Body: "hello",
      Date: "2023-07-09 03:25:09.1001166",
      CreatedDate: "2023-07-09 00:25:09.1110842",
      LastModifiedDate: "2023-07-09 00:27:42.8901446",
    },
    {
      Id: "F7017A09-1559-4099-A56F-80E4955D6FEA",
      Title: "from api token",
      Body: "hello",
      Date: "2023-07-09 03:20:56.1292027",
      CreatedDate: "2023-07-09 00:20:56.4820542",
      LastModifiedDate: "2023-07-09 00:27:42.8901494",
    },
    {
      Id: "01E18F9B-CEA8-4D64-BF70-97A9A5D8C354",
      Title: "from api token",
      Body: "hello",
      Date: "2023-07-09 03:20:09.2303568",
      CreatedDate: "2023-07-09 00:20:09.5755108",
      LastModifiedDate: "2023-07-09 00:27:42.8901523",
    },
    {
      Id: "56279755-969A-414B-9B81-A108171D5855",
      Title: "from api token",
      Body: "hello",
      Date: "2023-07-09 03:19:10.7871464",
      CreatedDate: "2023-07-09 00:19:11.5620223",
      LastModifiedDate: "2023-07-09 00:27:42.8901458",
    },
    {
      Id: "69A6972E-35E9-4D40-9255-B5FFDF235879",
      Title: "from api topic",
      Body: "hello",
      Date: "2023-07-09 03:25:03.0535187",
      CreatedDate: "2023-07-09 00:25:03.9799495",
      LastModifiedDate: "2023-07-09 00:27:42.8901422",
    },
    {
      Id: "5289FA5C-D03C-4556-8750-B93538EC6DB8",
      Title: "from api topic",
      Body: "hello",
      Date: "2023-07-09 03:24:19.7500895",
      CreatedDate: "2023-07-09 00:24:20.6987705",
      LastModifiedDate: "2023-07-09 00:27:42.8901547",
    },
    {
      Id: "CA06C370-3A43-4DEB-B55F-C7C01A77494A",
      Title: "from api token",
      Body: "hello",
      Date: "2023-07-09 03:25:44.7450738",
      CreatedDate: "2023-07-09 00:25:44.7592938",
      LastModifiedDate: "2023-07-09 00:27:42.8901535",
    },
    {
      Id: "1B781780-FA68-4140-86E7-C802EA623478",
      Title: "from api token",
      Body: "hello",
      Date: "2023-07-09 03:25:17.8876955",
      CreatedDate: "2023-07-09 00:25:17.9020729",
      LastModifiedDate: "2023-07-09 00:27:42.8901484",
    },
    {
      Id: "140285D7-836D-44CC-A248-CDFB61A153AB",
      Title: "from api token",
      Body: "hello",
      Date: "2023-07-09 03:20:49.1780068",
      CreatedDate: "2023-07-09 00:20:49.3739529",
      LastModifiedDate: "2023-07-09 00:27:42.8901352",
    },
    {
      Id: "2FB0EA93-86A5-4EF3-AF36-CFED1380DA3A",
      Title: "from api token",
      Body: "hello",
      Date: "2023-07-09 03:26:10.3705016",
      CreatedDate: "2023-07-09 00:26:10.5927250",
      LastModifiedDate: "2023-07-09 00:27:42.8901562",
    },
    {
      Id: "D8D6291D-52C7-42F1-854A-EACC3E361EB4",
      Title: "from api token",
      Body: "hello",
      Date: "2023-07-09 03:27:50.9764305",
      CreatedDate: "2023-07-09 00:27:51.0370961",
      LastModifiedDate: null,
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
