import { NotificationScreen } from "../../notifications/screens/notifications.screen";
import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import Slider from "@react-native-community/slider";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components";
import { Switch } from "react-native-paper";
import CircularProgress from "react-native-circular-progress-indicator";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import { Icon, IconTypes } from "../../../components/Icons/Icons.components";

import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { ThemeContext } from "../../../services/ThemeContext/Theme.context";
import { ScreenView } from "../../../components/views/screenView.component";
import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Line,
} from "react-native-responsive-linechart";

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
export const AssistantScreen = () => {
  const { theme } = useContext(ThemeContext);

  const TimeSeriesData = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
  ];
  return (
    <View>
      <Background></Background>
      <View
        style={{
          position: "absolute",
          top: "35%",
          alignSelf: "center",
        }}
      >
        <LineChart
          data={{
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                data: TimeSeriesData,
              },
            ],
          }}
          width={Dimensions.get("window").width - 10} // from react-native
          height={280}
          yAxisLabel=""
          yAxisSuffix="ْkg"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: theme.colors.bg.secondary,
            backgroundGradientTo: theme.colors.bg.secondary,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(120, 120, 120, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(120, 120, 120, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
            propsForLabels: {
              transform: [{ rotate: "-45deg" }], // Rotate the labels by -45 degrees
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};
