import React from "react";
import { Slider, View } from "react-native";
// import { Slider } from "@react-native-community/slider";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components";
import { Card, Switch } from "react-native-paper";
import CircularProgress from "react-native-circular-progress-indicator";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";

const SensorTitle = styled(Text)`
  font-weight: bold;
  font-size: 20px;
`;
export const SensorControl = () => {
  return (
    <SafeArea>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingTop: 80,
        }}
      >
        <View style={{ marginBottom: 20 }}>
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

        <View
          style={{
            height: 400,
            width: "100%",
            flexDirection: "row",
          }}
        >
          <View style={{ marginTop: 50, marginLeft: 10 }}>
            <Card
              style={{
                height: 280,
                width: 280,
                margin: 10,
                borderRadius: 200,
                position: "absolute",
              }}
            />
            <CircularProgress
              value={60}
              radius={150}
              duration={1000}
              maxValue={200}
              title={"KM/H"}
              clockwise
              rotation={180}
              strokeLinecap="round"
              inActiveStrokeWidth={5}
              activeStrokeWidth={8}
              activeStrokeColor="green"
              titleStyle={{ fontWeight: "bold" }}
              titleFontSize={20}
            />
          </View>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Slider
              style={{
                width: 200,
                height: 300,
                transform: [{ rotate: "-90deg" }],
              }}
              minimumValue={0}
              maximumValue={100}
            />
          </View>
        </View>
        <View></View>
      </View>
    </SafeArea>
  );
};
