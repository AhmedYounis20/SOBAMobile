import React from "react";
import { View } from "react-native";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components";
import { Switch } from "react-native-paper";
import CircularProgress from "react-native-circular-progress-indicator";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";

const SensorTitle = styled(Text)``;
export const SensorControl = () => {
  return (
    <SafeArea>
      <View
        style={{
          flex: 1,

          alignItems: "center",
        }}
      >
        <View>
          <SensorTitle>Time Setting</SensorTitle>
        </View>
        <View
          style={{
            flexDirection: "row",
            maxHeight: 100,
            width: "90%",
            justifyContent: "flex-start",
            paddingLeft: 10,
          }}
        >
          <Switch />
          <View style={{ width: "65%" }} />
          <Switch />
        </View>

        <View style={{ height: 400 }}>
          <CircularProgress
            value={60}
            radius={120}
            duration={1000}
            maxValue={200}
            title={"KM/H"}
            clockwise
            rotation={180}
            titleColor=""
            strokeLinecap="round"
            activeStrokeColor="green"
            titleStyle={{ fontWeight: "bold" }}
          />
        </View>
        <View>
          <SensorTitle>Time Setting</SensorTitle>
        </View>
      </View>
    </SafeArea>
  );
};
