import React from "react";
import { Text, View, Image } from "react-native";
import { Button } from "react-native-paper";
import {
  Background,
  GuideButtonsView,
  MainGuideButton,
} from "../components/guide.styles";
import styled from "styled-components";
import { ScreenView } from "../../../components/views/screenView.component";

const Titletext = styled(Text)`
  font-size: 29px;
  color: #ffffff;
  font-weight: 800;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 30px;
`;

const ContentText = styled(Text)`
  font-size: 15px;
  color: #ffffff;
  letter-spacing: 0.6px;
  text-align: center;
  width: 90%;
  line-height: 22px;
`;
const CenterView = styled(View)`
  align-items: center;
  margin-top: 9%;
`;

export const DisDetectFirstPage = ({ navigation }) => {
  return (
    <ScreenView>
      <Background
        resizeMode="cover"
        source={require("../../../../assets/images/diseaseDetectionGuide/page1.png")}
      >
        <Background
          resizeMode="cover"
          source={require("../../../../assets/images/Black_frame.png")}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              style={{
                width: 200,
                height: 200,
                marginTop: 150,
              }}
              source={require("../../../../assets/images/diseaseDetectionGuide/centerpage1.png")}
            />
          </View>
          <CenterView>
            <Titletext>
              Check your plant for infections
            </Titletext>
            <ContentText>
              Our goal is to help you identify any disease which your plant might be infected with 
              quickly and easily, using just your smartphone.
            </ContentText>
          </CenterView>
          <GuideButtonsView>
            <MainGuideButton
              textColor="#FFFFFF"
              onPress={() => navigation.navigate("DisDetectSecondPage")}
            >
              Get Started
            </MainGuideButton>
            <Button
              style={{ marginTop: 15 }}
              onPress={() => navigation.navigate("DiseaseDetection")}
            >
              <Text style={{ textDecorationLine: "underline" }}>
                Skip to Camera
              </Text>
            </Button>
          </GuideButtonsView>
        </Background>
      </Background>
    </ScreenView>
  );
};
