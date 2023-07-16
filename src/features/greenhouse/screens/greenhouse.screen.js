import styled from "styled-components";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import {
  FlatList,
  Image,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native";
import { SensorCard } from "../components/sensorcard.component";
import { IconTypes } from "../../../components/Icons/Icons.components";
import { Card } from "react-native-paper";
import { ThemeContext } from "../../../services/ThemeContext/Theme.context";
import { useContext } from "react";
import { StatusBar } from "react-native";
import { ScreenView } from "../../../components/views/screenView.component";
const TopSlider = styled.View`
  height: 40%;
  background-color: "red";
`;
const PageContent = styled.View`
  height: 52%;
  background-color: "red";
`;

const Background = styled.View`
  height: 8%;
  width: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
`;

const ScreenTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.white};
  margin: 0 1% 0 1%;
  padding: ${(props) => props.theme.space[3]};
`;

export const GreenHouseScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const sens = [
    {
      name: "Light",
      value: 12,
      unit: "Lux",
      icon: "sun",
      iconType: IconTypes.Feather,
      minValue: 200,
      maxValue: 2000,
      actuatorUrl: "https://336c-105-197-10-100.ngrok-free.app/predict",
    },
    {
      name: "Temperature",
      value: 24,
      unit: "℃",
      icon: "thermometer",
      iconType: IconTypes.Feather,
      minValue: 10,
      maxValue: 60,
      actuatorUrl: "https://336c-105-197-10-100.ngrok-free.app/predict",
    },
    {
      name: "watering",
      value: 10,
      unit: "%",
      icon: "water",
      iconType: IconTypes.Entypo,
      minValue: 200,
      maxValue: 2000,
      actuatorUrl: "https://336c-105-197-10-100.ngrok-free.app/predict",
    },
    {
      name: "ventilation",
      value: 20,
      unit: "%",
      icon: "wind",
      iconType: IconTypes.Feather,
      minValue: 20,
      maxValue: 2000,
      actuatorUrl: "https://336c-105-197-10-100.ngrok-free.app/predict",
    },
  ];

  return (
    <ScreenView
      style={{
        paddingTop: 30,
      }}
    >
      <Background>
        <ScreenTitle>Greenhouse1</ScreenTitle>
      </Background>
      <View
        style={{
          marginTop: 30,
          minHeight: "100%",
          backgroundColor: theme.colors.bg.primary,
        }}
      >
        <TopSlider style={{ padding: 10 }}>
          <Card>
            <TouchableOpacity
              onPress={() => navigation.navigate("GreenHouseDetails")}
            >
              <Card.Cover
                source={require("../../../../assets/green_house.jpg")}
                style={{ height: "100%" }}
              />
            </TouchableOpacity>
          </Card>
        </TopSlider>
        <PageContent>
          <FlatList
            data={sens}
            numColumns={2}
            renderItem={({ item, index }) => (
              <SensorCard
                navigation={navigation}
                name={item.name}
                value={item.value}
                unit={item.unit}
                iconName={item.icon}
                sensor={item}
                sensors={sens}
                iconType={item.iconType}
                key={index}
              />
            )}
          />
        </PageContent>
      </View>
    </ScreenView>
  );
};
