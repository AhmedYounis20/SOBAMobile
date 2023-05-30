import React from "react";
import { Slider, View } from "react-native";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components";
import { Card, Switch } from "react-native-paper";
import CircularProgress from "react-native-circular-progress-indicator";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import { Icon, IconTypes } from "../../../components/Icons/Icons.components";
import { RoundedButton } from "../components/RoundedButton.component";

const SensorTitle = styled(Text)`
  font-weight: bold;
  font-size: 20px;
`;

export const SensorControl = () => (
  <SafeArea>
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 80,
      }}
    >
      <View style={{ marginBottom: 20 }}>
        <SensorTitle>Sensor Control</SensorTitle>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "95%",
          justifyContent: "space-between",
          paddingLeft: 10,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              height: 30,
            }}
          >
            <Switch />
            <Icon name="fan" iconType={IconTypes.MaterialCommunityIcons} />
          </View>
          <Text style={{ fontSize: 10 }}>fan is off when window is open</Text>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              height: 30,
            }}
          >
            <Icon name="fan" iconType={IconTypes.MaterialCommunityIcons} />
            <Switch />
          </View>
          <Text style={{ fontSize: 10 }}>fan is off if humidity stable</Text>
        </View>
      </View>

      <View
        style={{
          height: 400,
          width: "100%",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            marginTop: 30,
            marginLeft: 30,
            justifyContent: "center",
          }}
        >
          <Card
            style={{
              height: 225,
              width: 225,
              alignSelf: "center",

              borderRadius: 200,
              position: "absolute",
            }}
          />
          <CircularProgress
            value={60}
            radius={130}
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
          style={{
            flex: 1,
            alignItems: "center",
            paddingTop: 100,
          }}
        >
          <View style={{ marginBottom: 50 }}>
            <Text style={{ color: "red", fontWeight: "bold", fontSize: 20 }}>
              35 ْC
            </Text>
          </View>
          <Slider
            style={{
              width: 200,
              height: 100,
              transform: [{ rotate: "-90deg" }],
            }}
            minimumValue={0}
            maximumValue={100}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <RoundedButton>
          <Icon
            name={"sun"}
            iconType={IconTypes.Feather}
            size={30}
            color={"white"}
          />
        </RoundedButton>
        <RoundedButton>
          <Icon
            name={"water"}
            iconType={IconTypes.Entypo}
            size={30}
            color={"white"}
          />
        </RoundedButton>
        <RoundedButton>
          <Icon
            name={"thermometer"}
            iconType={IconTypes.Feather}
            size={30}
            color={"white"}
          />
        </RoundedButton>
        <RoundedButton>
          <Icon
            name={"wind"}
            iconType={IconTypes.Feather}
            size={30}
            color={"white"}
          />
        </RoundedButton>
      </View>
    </View>
  </SafeArea>
);
