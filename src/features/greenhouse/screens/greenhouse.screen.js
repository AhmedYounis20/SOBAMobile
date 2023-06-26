import styled from "styled-components";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import { FlatList, Image, View } from "react-native";
import { SensorCard } from "../components/sensorcard.component";
import { IconTypes } from "../../../components/Icons/Icons.components";
import { Card } from "react-native-paper";
import { ThemeContext } from "../../../services/ThemeContext/Theme.context";
import { useContext } from "react";
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
      unit: "watt",
      icon: "sun",
      iconType: IconTypes.Feather,
    },
    {
      name: "Temperature",
      value: 24,
      unit: "℃",
      icon: "thermometer",
      iconType: IconTypes.Feather,
    },
    {
      name: "watering",
      value: 200,
      unit: "ml",
      icon: "water",
      iconType: IconTypes.Entypo,
    },
    {
      name: "ventilation",
      value: 10,
      unit: "m/s",
      icon: "wind",
      iconType: IconTypes.Feather,
    },
  ];

  return (
    <SafeArea>
      <View
        style={{ minHeight: "100%", backgroundColor: theme.colors.bg.primary }}
      >
        <TopSlider style={{ padding: 10 }}>
          <Card>
            <Card.Cover
              source={require("../../../../assets/green_house.jpg")}
              style={{ height: "100%" }}
            />
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
                iconType={item.iconType}
                key={index}
              />
            )}
          />
        </PageContent>
      </View>
    </SafeArea>
  );
};
