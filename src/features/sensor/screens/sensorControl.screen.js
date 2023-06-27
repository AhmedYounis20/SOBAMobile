import React, { useContext } from "react";
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
const SensorTitle = styled(Text)`
  font-weight: bold;
  font-size: 20px;
`;

export const SensorControl = () => {
  const { theme } = useContext(ThemeContext);
  const sensors = [
    { name: "sun", icon: IconTypes.Feather },
    { name: "water", icon: IconTypes.Entypo },
    { name: "thermometer", icon: IconTypes.Feather },
    { name: "wind", icon: IconTypes.Feather },
  ];

  return (
    <SafeArea>
      <Container>
        <View style={{ marginBottom: 20 }}>
          <SensorTitle>Sensor Control</SensorTitle>
        </View>
        <FansControlView>
          <View>
            <LeftFanView>
              <Switch />
              <Icon name="fan" iconType={IconTypes.MaterialCommunityIcons} />
            </LeftFanView>
            <FanLabel>fan is off when window is open</FanLabel>
          </View>

          <View>
            <RightFanView>
              <Icon name="fan" iconType={IconTypes.MaterialCommunityIcons} />
              <Switch />
            </RightFanView>
            <FanLabel>fan is off if humidity stable</FanLabel>
          </View>
        </FansControlView>

        <CenterView>
          <ProgressContainer>
            <ProgressCard />
            <CircularProgress
              value={60}
              radius={130}
              duration={1000}
              maxValue={200}
              title={"ْC"}
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
              <SliderText>35 ْC</SliderText>
            </View>
            <Slider
              value={50}
              style={{
                width: 200,
                height: 100,
                transform: [{ rotate: "-90deg" }],
              }}
              step={20}
              maximumTrackTintColor={"rgba(120,120,120,0.25)"}
              minimumValue={0}
              maximumValue={100}
            />
          </View>
        </CenterView>
        <Row>
          {sensors.map((item, index) => (
            <RoundedButton key={index}>
              <Icon
                name={item.name}
                iconType={item.icon}
                size={30}
                color={"white"}
              />
            </RoundedButton>
          ))}
        </Row>
        <View>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
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
                  ],
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
    </SafeArea>
  );
};
