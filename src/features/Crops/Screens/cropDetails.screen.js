import { useContext, useState } from "react";
import {
  View,
  Text,
  Card,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ThemeContext } from "../../../services/ThemeContext/Theme.context";
import styled from "styled-components";
import { Icon, IconTypes } from "../../../components/Icons/Icons.components";
import { Dimensions } from "react-native";

import { LineChart } from "react-native-chart-kit";

const CropDetailsItemView = styled.View`
  height: 80px;
  width: 95%;
  border-radius: 20px;
  margin-vertical: 5px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  background-color: ${(props) => props.theme.colors.ui.primary};
`;
const DataText = styled.Text`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 14px;
  color: ${(props) => props.theme.colors.text.white};
  font-weight: bold;
  margin-left: 20px;
`;
const SecondaryNoteText = styled.Text`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 14px;
  color: ${(props) => props.theme.colors.text.white};
  margin-left: 20px;
`;
const MainDataView = styled.View`
  width: 55%;
`;
const SecondaryNotesView = styled.View`
  width: 30%;
`;
const ImageView = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.4);
  align-items: center;
  justify-content: center;
`;
const ScrollContainer = styled.ScrollView`
  margin-vertical: 10px;
  border-radius: 20px;
  width: 95%;
  height: 90%;
`;
const ImageContainer = styled.View`
  height: 300px;
  width: 95%;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;
const MainImage = styled.Image`
  width: 300px;
  height: 100%;
`;
const CropTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  font-style: italic;
  color: ${(props) => props.theme.colors.text.primary};
`;

const NavigationView = styled.View`
  width: 90%;
  border-radius: 50px;
  height: 70px;
  flex-direction: row;
  padding-horizontal: 5%;
  align-items: center;
  justify-content: center;
  border-color: rgba(0, 0, 0, 0.1);
  border-width: 1px;
`;
export const CropDetailsScreen = ({ route, navigation }) => {
  const { index } = route.params;

  const { theme } = useContext(ThemeContext);
  // const TimeSeriesData = [
  //   Math.random() * 100,
  //   Math.random() * 100,
  //   Math.random() * 100,
  //   Math.random() * 100,
  //   Math.random() * 100,
  //   Math.random() * 100,
  //   Math.random() * 100,
  //   Math.random() * 100,
  //   Math.random() * 100,
  //   Math.random() * 100,
  // ];
  const [imageDimenssions, setImageDimenssions] = useState([40, 100, 200, 100]);

  crop = {
    icon: "crop_icon.png",
    image: require("../../../../assets/images/tomatos.png"),
    cropDetailsId: "",
    cropDetails: {
      height: 80,
      spread: 60.5,
      sowingDepth: 5,
      rowSpacing: 30,
      soilType: "Black",
      cropSeason: "Autumn",
      cropCategory: "Fruit",
      growingDegreeDays: 1200,
      description: "This crop is known for its delicious fruits.",
      plantingDate: { month: "6 Nov", days: "20Days" },
      harvestDate: { month: "20 Dec", days: "10Days" },
      lastMeasureHealthy: { month: "20 Nov", days: "2Days" },
      TimeSeriesData: [
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
    cropRequirements: [
      {
        cropId: "",
        requirementType: "Water",
        value: 20,
        unit: "ML/Day",
      },
      {
        cropId: "",
        requirementType: "Temperature",
        value: 30,
        unit: "c",
      },
    ],
  };
  crops = [
    {
      name: "Tomato",
      icon: "crop_icon.png",
      image: require("../../../../assets/images/tomatos.png"),
      cropDetailsId: "",
      cropDetails: {
        height: 80,
        spread: 60.5,
        sowingDepth: 5,
        rowSpacing: 30,
        soilType: "Black",
        cropSeason: "Autumn",
        cropCategory: "Fruit",
        growingDegreeDays: 1200,
        description: "This crop is known for its delicious fruits.",
        plantingDate: { month: "6 Nov", days: "20Days" },
        harvestDate: { month: "20 Dec", days: "10Days" },
        lastMeasureHealthy: { month: "20 Nov", days: "2Days" },
        TimeSeriesData: [
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
      cropRequirements: [
        {
          cropId: "",
          requirementType: "Water",
          value: 20,
          unit: "ML/Day",
        },
        {
          cropId: "",
          requirementType: "Temperature",
          value: 30,
          unit: "c",
        },
      ],
    },
    {
      name: "cherries",
      icon: "crop_icon.png",
      image: require("../../../../assets/images/cherries.png"),
      cropDetailsId: "",
      cropDetails: {
        height: 80,
        spread: 60.5,
        sowingDepth: 5,
        rowSpacing: 30,
        soilType: "Black",
        cropSeason: "Autumn",
        cropCategory: "Fruit",
        growingDegreeDays: 1200,
        description: "This crop is known for its delicious fruits.",
        plantingDate: { month: "2 Nov", days: "20Days" },
        harvestDate: { month: "10 Dec", days: "2Days" },
        lastMeasureHealthy: { month: "20 Nov", days: "20Days" },
        TimeSeriesData: [
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
      cropRequirements: [
        {
          cropId: "",
          requirementType: "Water",
          value: 30,
          unit: "ML/Day",
        },
        {
          cropId: "",
          requirementType: "Temperature",
          value: 10,
          unit: "c",
        },
      ],
    },
  ];
  return (
    <View
      style={{
        alignItems: "center",
        paddingBottom: 20,
        paddingTop: 40,
        backgroundColor: theme.colors.bg.primary,
      }}
    >
      <ScrollContainer
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          backgroundColor: theme.colors.bg.primary,
        }}
      >
        <View style={{ width: "100%", padding: 10, paddingLeft: 20 }}>
          <CropTitle>{crops[index].name}</CropTitle>
        </View>
        <ImageContainer>
          <MainImage source={crops[index]["image"]} resizeMode="contain" />
        </ImageContainer>
        <View
          style={{
            marginVertical: 10,
            borderRadius: 20,
            width: "95%",
            backgroundColor: theme.colors.bg.secondary,
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              marginHorizontal: 15,
              marginVertical: 10,
              fontSize: 20,
              fontWeight: "bold",
              color: theme.colors.text.primary,
            }}
          >
            Crop Details
          </Text>
          <View
            style={{
              marginVertical: 10,
              width: "100%",
              alignItems: "center",
              backgroundColor: theme.colors.bg.secondary,
              justifyContent: "space-between",
              borderRadius: 20,
            }}
          >
            <CropDetailsItemView>
              <ImageView>
                <Image
                  style={{ height: 25, width: 25 }}
                  source={require("../../../../assets/images/plant.png")}
                />
              </ImageView>
              <MainDataView>
                <DataText>Crop Category</DataText>
              </MainDataView>
              <SecondaryNotesView>
                <DataText>
                  {crops[index]["cropDetails"]["cropCategory"]}
                </DataText>
              </SecondaryNotesView>
            </CropDetailsItemView>
            <CropDetailsItemView>
              <ImageView>
                <Image
                  style={{ height: 25, width: 25 }}
                  source={require("../../../../assets/images/plant.png")}
                />
              </ImageView>
              <MainDataView>
                <DataText>Crop Season</DataText>
              </MainDataView>
              <SecondaryNotesView>
                <DataText>{crops[index]["cropDetails"]["cropSeason"]}</DataText>
              </SecondaryNotesView>
            </CropDetailsItemView>
            <CropDetailsItemView>
              <ImageView>
                <Image
                  style={{ height: 25, width: 25 }}
                  source={require("../../../../assets/images/plant.png")}
                />
              </ImageView>
              <MainDataView>
                <DataText> Soil Type</DataText>
              </MainDataView>
              <SecondaryNotesView>
                <DataText>{crops[index]["cropDetails"]["soilType"]}</DataText>
              </SecondaryNotesView>
            </CropDetailsItemView>
            <CropDetailsItemView>
              <ImageView>
                <Image
                  style={{ height: 25, width: 25 }}
                  source={require("../../../../assets/images/plant.png")}
                />
              </ImageView>
              <MainDataView>
                <DataText> Planting Date</DataText>
              </MainDataView>
              <SecondaryNotesView>
                <DataText>
                  {crops[index]["cropDetails"]["plantingDate"]["month"]}
                </DataText>
                <SecondaryNoteText>
                  {crops[index]["cropDetails"]["plantingDate"]["days"]}
                </SecondaryNoteText>
              </SecondaryNotesView>
            </CropDetailsItemView>
            <CropDetailsItemView>
              <ImageView>
                <Image
                  style={{ height: 25, width: 25 }}
                  source={require("../../../../assets/images/plant.png")}
                />
              </ImageView>
              <MainDataView>
                <DataText> Harvest date</DataText>
              </MainDataView>
              <SecondaryNotesView>
                <DataText>
                  {crops[index]["cropDetails"]["harvestDate"]["month"]}
                </DataText>
                <SecondaryNoteText>
                  {crops[index]["cropDetails"]["harvestDate"]["month"]}
                </SecondaryNoteText>
              </SecondaryNotesView>
            </CropDetailsItemView>
            <CropDetailsItemView>
              <ImageView>
                <Image
                  style={{ height: 25, width: 25 }}
                  source={require("../../../../assets/images/plant.png")}
                />
              </ImageView>
              <MainDataView>
                <DataText> last healthy measure</DataText>
                <DataText> healthy</DataText>
              </MainDataView>
              <SecondaryNotesView>
                <DataText>
                  {crops[index]["cropDetails"]["lastMeasureHealthy"]["month"]}
                </DataText>
                <SecondaryNoteText>
                  {crops[index]["cropDetails"]["lastMeasureHealthy"]["days"]}
                </SecondaryNoteText>
              </SecondaryNotesView>
            </CropDetailsItemView>
          </View>
        </View>
        <View
          style={{
            marginVertical: 10,
            borderRadius: 20,
            width: "95%",
            backgroundColor: theme.colors.bg.secondary,
          }}
        >
          <Text
            style={{
              marginHorizontal: 15,
              marginVertical: 10,
              fontSize: 20,
              fontWeight: "bold",
              color: theme.colors.text.primary,
            }}
          >
            Health Statistics
          </Text>
          <View
            style={{
              marginVertical: 10,
              width: "100%",
              alignItems: "center",
              backgroundColor: theme.colors.bg.secondary,
              justifyContent: "space-between",
              borderRadius: 20,
            }}
          >
            <LineChart
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                ],
                datasets: [
                  {
                    data: crops[index]["cropDetails"]["TimeSeriesData"],
                  },
                ],
              }}
              width={330} // from react-native
              height={220}
              yAxisLabel=""
              yAxisSuffix="%"
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
        </View>
        <View
          style={{
            marginVertical: 10,
            borderRadius: 20,
            width: "95%",
            backgroundColor: theme.colors.bg.secondary,
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              marginHorizontal: 15,
              marginVertical: 10,
              fontSize: 20,
              fontWeight: "bold",
              color: theme.colors.text.primary,
            }}
          >
            Crop Requirments
          </Text>
          <View
            style={{
              marginVertical: 10,
              width: "100%",
              alignItems: "center",
              backgroundColor: theme.colors.bg.secondary,
              justifyContent: "space-between",
              borderRadius: 20,
            }}
          >
            {crops[index]["cropRequirements"] &&
              crops[index]["cropRequirements"].map((item, index) => (
                <CropDetailsItemView key={index}>
                  <ImageView>
                    <Image
                      style={{ height: 25, width: 25 }}
                      source={require("../../../../assets/images/plant.png")}
                    />
                  </ImageView>
                  <MainDataView>
                    <DataText>{item["requirementType"]}</DataText>
                  </MainDataView>
                  <SecondaryNotesView>
                    <DataText>{item["value"]}</DataText>
                    <SecondaryNoteText>ْ{item["unit"]}</SecondaryNoteText>
                  </SecondaryNotesView>
                </CropDetailsItemView>
              ))}
          </View>
        </View>
      </ScrollContainer>
      <NavigationView>
        <ScrollView
          style={{
            borderRadius: 50,
            height: 70,
            flexDirection: "row",
            paddingHorizontal: "5%",
          }}
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {crops.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={{ marginHorizontal: 10 }}
              onPress={() => navigation.navigate("CropDetails", { index: idx })}
            >
              <ImageView
                style={{
                  backgroundColor:
                    idx == index ? "white" : "rgba(255, 255, 255, 0.4)",
                }}
              >
                <Image
                  source={item["image"]}
                  style={{ height: 40, width: 40 }}
                  resizeMode="contain"
                />
              </ImageView>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </NavigationView>
    </View>
  );
};

/*
 * plant scene and its name
 * life form (seeding)
 * has a diesise?
 * expected harvest time
 * expected yield
 * time-series chart of health of crop
 */
