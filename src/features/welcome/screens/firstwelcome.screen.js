import { View, Image, TouchableOpacity, Text } from "react-native";
import {
  BackGround,
  CenterView,
  ContentText,
  DotContainer,
  HeaderView,
  LogoView,
  NextText,
  SleepDot,
  TextContainer,
  WakeDot,
  WelcomeText,
  NavigationContainer,
  PrevView,
} from "../components/welcome.styles";
import styled from "styled-components";

export const FirstWelcome = ({ navigation }) => {
  return (
    <>
      <BackGround
        resizeMode="cover"
        source={require("../../../../assets/images/intro1/intro1.png")}
      >
        <BackGround
          resizeMode="cover"
          source={require("../../../../assets/images/Black_frame.png")}
        >
          <HeaderView>
            <View>
              <Image
                source={require("../../../../assets/images/intro1/left.png")}
              />
            </View>
            <LogoView>
              <Image
                source={require("../../../../assets/images/top_center.png")}
              />
            </LogoView>
            <View>
              <Image
                source={require("../../../../assets/images/intro1/right.png")}
              />
            </View>
          </HeaderView>
          <CenterView>
            <Image
              source={require("../../../../assets/images/intro1/center.png")}
            />
          </CenterView>
          <TextContainer>
            <WelcomeText>
              Welcome to{" "}
              <Image source={require("../../../../assets/images/Logo.png")} />
            </WelcomeText>
            <ContentText>
              Our app is designed to help you create a thriving garden in a
              controlled and sustainable environment.
            </ContentText>
          </TextContainer>
          <NavigationContainer>
            <PrevView />
            <DotContainer>
              <WakeDot />
              <SleepDot />
              <SleepDot />
            </DotContainer>

            <View>
              <TouchableOpacity onPress={() => navigation.navigate("welcome2")}>
                <NextText>Next</NextText>
              </TouchableOpacity>
            </View>
          </NavigationContainer>
        </BackGround>
      </BackGround>
    </>
  );
};
