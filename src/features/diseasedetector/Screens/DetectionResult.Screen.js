import { useEffect, useState } from "react";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import { View, Image, Text } from "react-native";
import styled from "styled-components";
import { ActivityIndicator, Button } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

const ScreenView = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Background = styled.View`
  height: ${Platform.OS == "android" ? "12%" : "12%"};
  width: 100%;
  position: absolute;
  top: 0;
  right: 0px;
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
`;

const ScreenTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.white};
  margin: 7% 1% 0 1%;
  padding: ${(props) => props.theme.space[3]};
`;

const ResaultView = styled.View`
  flex: 1;
  gap: 32px;
  justify-content: center;
  align-items: center;
  `;
  
  const PlantImage = styled.Image`
  width: 60%;
  height: 60%;
  margin-top:90px;
  border-radius: 32px;
  border-width: 5px;
  border-color: ${(props) => props.theme.colors.ui.primary};
`;

const ResultText = styled(Text)`
  font-size: 25px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.primary};
`;

const AddNoteButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-radius: 64px;
  justify-content:center;
  height:64px;
  margin: 0px 2.5% 64px 2.5%;
`;

export const DetectionResultScreen = ({ route }) => {
  const [result, setResult] = useState([[0.9, 0.1]]);
  const [isLoading, setIsLoading] = useState(true);
  const { uri } = route.params;
  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      console.log(uri);
      setIsLoading(false);
    };
    load();
  }, []);
  return (
    <ScreenView>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            alignContent: "center",
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator
            animating={true}
            size={50}
            color="rgba(100,100,255,1)"
          />
          <Text
            style={{
              marginTop: 20,
              fontSize: 16,
              fontWeight: "bold",
              color: "rgba(100,100,255,1)",
              fontStyle: "italic",
            }}
          >
            Please wait for prediction...
          </Text>
        </View>
      ) : (
        <>
          <ResaultView>
            <StatusBar style="auto" />
            <Background>
              <ScreenTitle>Detection Result</ScreenTitle>
            </Background>
            <PlantImage source={{ uri: uri }} />
            <ResultText>Healthy Tomato</ResultText>
          </ResaultView>
          <AddNoteButton
            icon="grass"
            mode="contained"
          >
            Show suggested treatment
          </AddNoteButton>
        </>
      )}
    </ScreenView>
  );
};

{
  /* <View
  // resizeMode="contain"
style={{
  flex: 1,
  alignItems: "center",
  justifyContent: "flex-start",
}}
>
<View
  style={{
    height: "70%",
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <View style={{ flex: 1 }}>
    <Image
      source={{ uri: uri }}
      style={{ flex: 1 }}
      resizeMode="contain"
    />
  </View>
</View>
<ResultText>Healthy : {Math.ceil(result[0][0] * 100)}%</ResultText>
<ResultText>
  powdery mildew : {Math.floor(result[0][1] * 100)}%
</ResultText>
</View> */
}
