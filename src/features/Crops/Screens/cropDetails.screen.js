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
import {
  ChartContainer,
  CropRequirementsContainer,
  DetailsContainer,
  ImageContainer,
  ScreenConatiner,
  ScrollContainer,
  StatisticsContainer,
  StatisticsTitle,
  TitleContainer,
  CropTitle,
  MainImage,
  DetailsText,
  CropDetailsContainer,
  CropDetailsItemView,
  ImageView,
  CropItemsImage,
  MainDataView,
  DataText,
  SecondaryNoteText,
  SecondaryNotesView,
  CropRequirementsTitle,
  RequirementitemContainer,
  NavigationView,
} from "../components/cropDetails.styles";

// const NavigationScrollView = styled.View`
//   border-radius: 50px;
//   height: 70px;
//   flex-direction: row;
//   padding-horizontal: 5%;
// `;
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
    <ScreenConatiner>
      <ScrollContainer
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          backgroundColor: theme.colors.bg.primary,
        }}
      >
        <TitleContainer>
          <CropTitle>{crops[index].name}</CropTitle>
        </TitleContainer>
        <ImageContainer>
          <MainImage source={crops[index]["image"]} resizeMode="contain" />
        </ImageContainer>
        <DetailsContainer>
          <DetailsText>Crop Details</DetailsText>
          <CropDetailsContainer>
            <CropDetailsItemView>
              <ImageView>
                <CropItemsImage
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
                <CropItemsImage
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
                <CropItemsImage
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
                <CropItemsImage
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
                <CropItemsImage
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
                <CropItemsImage
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
          </CropDetailsContainer>
        </DetailsContainer>
        <StatisticsContainer>
          <StatisticsTitle>Health Statistics</StatisticsTitle>
          <ChartContainer>
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
          </ChartContainer>
        </StatisticsContainer>
        <CropRequirementsContainer>
          <CropRequirementsTitle>Crop Requirments</CropRequirementsTitle>
          <RequirementitemContainer>
            {crops[index]["cropRequirements"] &&
              crops[index]["cropRequirements"].map((item, index) => (
                <CropDetailsItemView key={index}>
                  <ImageView>
                    <CropItemsImage
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
          </RequirementitemContainer>
        </CropRequirementsContainer>
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
    </ScreenConatiner>
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
