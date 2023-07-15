import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import Slider from "@react-native-community/slider";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components";
import { Switch } from "react-native-paper";
import CircularProgress from "react-native-circular-progress-indicator";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import { Icon, IconTypes } from "../../../components/Icons/Icons.components";
import { RoundedButton } from "../components/RoundedButton.component";
import {
  CenterView,
  Container,
  FanLabel,
  FansControlView,
  LeftFanView,
  ProgressCard,
  ProgressContainer,
  RightFanView,
  Row,
  SliderText,
} from "../components/sensorControlStyles";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { ThemeContext } from "../../../services/ThemeContext/Theme.context";
import { ScreenView } from "../../../components/views/screenView.component";
const SensorTitle = styled(Text)`
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const SensorControl = ({ route, navigation }) => {
  const { theme } = useContext(ThemeContext);
  const { sensor, sensors } = route.params;
  const [sliderValue, setSliderValue] = useState(sensor.value);

  useEffect(() => {
    setSliderValue(sensor.value);
    console.log(`val${sensor.value}`);
  }, [sensor]);
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
  ];

  return (
    <ScreenView style={{ paddingTop: 20 }}>
      <Container>
        <View style={{ marginBottom: 20 }}>
          <SensorTitle>{sensor.name}</SensorTitle>
        </View>
        <FansControlView>
          <View>
            <LeftFanView>
              <Switch />
              <Icon
                name="fan"
                iconType={IconTypes.MaterialCommunityIcons}
                color={theme.colors.text.whiteBlack}
              />
            </LeftFanView>
            <FanLabel>Auto/Manual</FanLabel>
          </View>

          <View>
            <RightFanView>
              <Icon
                name="fan"
                iconType={IconTypes.MaterialCommunityIcons}
                color={theme.colors.text.whiteBlack}
              />
              <Switch />
            </RightFanView>
            <FanLabel>On/Off</FanLabel>
          </View>
        </FansControlView>

        <CenterView>
          <ProgressContainer>
            <ProgressCard />
            <CircularProgress
              value={sensor.value}
              radius={130}
              duration={1000}
              maxValue={200}
              title={sensor.unit}
              clockwise
              rotation={180}
              strokeLinecap="round"
              inActiveStrokeWidth={5}
              activeStrokeWidth={8}
              activeStrokeColor="green"
              titleStyle={{ fontWeight: "bold" }}
              titleFontSize={30}
            />
          </ProgressContainer>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              paddingTop: 50,
            }}
          >
            <View style={{ marginBottom: 50 }}>
              <SliderText>{sliderValue}</SliderText>
            </View>
            <Slider
              value={sensor.value}
              style={{
                width: 200,
                height: 100,
                transform: [{ rotate: "-90deg" }],
              }}
              onValueChange={(val) => {
                setSliderValue(val);
                console.log(val);
              }}
              step={20}
              maximumTrackTintColor={"rgba(120,120,120,0.25)"}
              minimumValue={sensor.minValue}
              maximumValue={sensor.maxValue}
            />
          </View>
        </CenterView>
        <Row>
          {sensors.map((item, index) => {
            console.log(item);
            return (
              <RoundedButton
                key={index}
                color={item.name == sensor.name ? "white" : "black"}
                onPress={() =>
                  navigation.navigate("SensorControl", {
                    sensor: item,
                    sensors: sensors,
                  })
                }
              >
                <Icon
                  name={item.icon}
                  iconType={item.iconType}
                  size={30}
                  color={item.name != sensor.name ? "white" : "black"}
                />
              </RoundedButton>
            );
          })}
        </Row>
        <View>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: TimeSeriesData,
                },
              ],
            }}
            width={Dimensions.get("window").width - 10} // from react-native
            height={220}
            yAxisLabel=""
            yAxisSuffix="ْC"
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
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
      </Container>
    </ScreenView>
  );
};
