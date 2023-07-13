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
    },
    {
      name: "Temperature",
      value: 24,
      unit: "℃",
      icon: "thermometer",
      iconType: IconTypes.Feather,
      minValue: 10,
      maxValue: 60,
    },
    {
      name: "watering",
      value: "10",
      unit: "%",
      icon: "water",
      iconType: IconTypes.Entypo,
      minValue: 200,
      maxValue: 2000,
    },
    {
      name: "ventilation",
      value: "",
      unit: "",
      icon: "wind",
      iconType: IconTypes.Feather,
      minValue: 20,
      maxValue: 2000,
    },
  ];

  return (
    <ScreenView
      style={{
        paddingTop: 30,
      }}
    >
      <View
        style={{ minHeight: "100%", backgroundColor: theme.colors.bg.primary }}
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
