import { Button, Image, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import { Card, ProgressBar, Text } from "react-native-paper";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../services/ThemeContext/Theme.context";

const previous = [
  {
    season: "Summer 2023",
    actualTime: "1Month 14dDays",
    crop: "tomato",
    startAt: "20 Jun",
    estimatedHarvestTime: "14Aug",
    estimatedProgress: 0.57,
    cropsHealthy: 0.97,
    isFinished: 0,
  },
  {
    season: "Spring 2023",
    actualTime: "2Months 1Day",
    crop: "carrot",
    startAt: "20 Mar",
    estimatedHarvestTime: "21 May",
    estimatedProgress: 1,
    cropsHealthy: 0.8,
    isFinished: 1,
  },
];

const getImage = (crop) => {
  switch (crop) {
    case "tomato":
      return "../../../../assets/tomato.png";
      break;

    default:
      return "";
      break;
  }
};

const Background = styled.View`
  height: ${Platform.OS == "android" ? "14%" : "14%"};
  width: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  align-items: center;
`;

const ScreenTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.white};
  margin: 7% 1% 0 1%;
  padding: ${(props) => props.theme.space[3]};
  padding-bottom: 0;
`;

const ScreenSubtitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.text.white};
  margin: 0 1% 0 1%;
  padding: ${(props) => props.theme.space[3]};
  padding-top: 0;
`;

const CurrentSeasonCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.primary}
  margin: 25% 16px 16px 16px;
`;

const CurrentSeasonView = styled.View`
  align-items: center;
`;

const CurrentSeasonText = styled.Text`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.white};
  padding: ${(props) => props.theme.space[3]};
`;

const DataText = styled.Text`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.text.white};
`;
const CurrentCropImage = styled(Image)`
  width: 100px;
  height: 100px;
  margin: 10px;
`;

const ProgressView = styled.View`
  flex: 1;
`;

const ProgressDataView = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 8px;
  gap: 8px;
`;

const PreviousTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.primary};
  margin: 16px;
`;

const SeasonCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.primary}
  margin: 8px 16px;
`;

const SeasonView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SeasonCropImage = styled(Image)`
  width: 50px;
  height: 50px;
  margin: 10px;
`;
export const GreenHouseDetailsScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const [current, setCurrent] = useState(previous[0]);

  useEffect(() => {
    console.log(current);
  }, []);

  const handlePress = (s) => {
    setCurrent(s);
  };

  return (
    <SafeArea>
      <Background>
        <ScreenTitle>Greenhouse1</ScreenTitle>
        <ScreenSubtitle>As Santa</ScreenSubtitle>
      </Background>
      <TouchableOpacity
        onPress={() => navigation.navigate("CropDetails", { index: 0 })}
      >
        <CurrentSeasonCard>
          <CurrentSeasonView>
            <CurrentSeasonText>{current.season}</CurrentSeasonText>
            <DataText>{current.actualTime}</DataText>
            <CurrentCropImage
              source={require("../../../../assets/tomato.png")}
            />
            <DataText>Estimated harvest time</DataText>
            <ProgressDataView>
              <DataText>{current.startAt}</DataText>
              <ProgressView>
                <ProgressBar
                  progress={current.estimatedProgress}
                  color={theme.colors.ui.primaryTransparent}
                  style={{ height: 10, borderRadius: 5 }}
                />
              </ProgressView>
              <DataText>{current.estimatedHarvestTime}</DataText>
            </ProgressDataView>
            <DataText>Crops health</DataText>
            <ProgressDataView>
              <DataText>0%</DataText>
              <ProgressView>
                <ProgressBar
                  progress={current.cropsHealthy}
                  color={theme.colors.ui.primaryTransparent}
                  style={{ height: 10, borderRadius: 5 }}
                />
              </ProgressView>
              <DataText>100%</DataText>
            </ProgressDataView>
          </CurrentSeasonView>
        </CurrentSeasonCard>
      </TouchableOpacity>
      <PreviousTitle>Seasons</PreviousTitle>
      {previous.map((s) => (
        <TouchableOpacity key={s.season} onPress={() => handlePress(s)}>
          <SeasonCard>
            <SeasonView>
              <SeasonCropImage
                source={require("../../../../assets/tomato.png")}
              />
              <DataText>{s.season}</DataText>
            </SeasonView>
          </SeasonCard>
        </TouchableOpacity>
      ))}
    </SafeArea>
  );
};
