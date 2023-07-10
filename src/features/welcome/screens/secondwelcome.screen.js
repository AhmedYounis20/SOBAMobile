import { Text, Image, View, TouchableOpacity } from "react-native";
import {
  BackGround,
  ContentText,
  DotContainer,
  HeaderView,
  LogoView,
  NavigationContainer,
  NextText,
  PrevView,
  SleepDot,
  WakeDot,
  WelcomeText,
} from "../components/welcome.styles";
import { ScreenView } from "../../../components/views/screenView.component";

export const SecondWelcome = ({ navigation }) => {
  return (
    <ScreenView>
      <BackGround
        resizeMode="cover"
        source={require("../../../../assets/images/intro2/intro2.png")}
      >
        <BackGround
          resizeMode="cover"
          source={require("../../../../assets/images/Black_frame.png")}
        >
          <HeaderView>
            <View>
              <Image
                source={require("../../../../assets/images/intro2/left.png")}
              />
            </View>
            <LogoView>
              <Image
                source={require("../../../../assets/images/top_center.png")}
              />
            </LogoView>
            <View>
              <Image
                source={require("../../../../assets/images/intro2/right.png")}
              />
            </View>
          </HeaderView>
          <View
            style={{
              alignItems: "center",
              position: "absolute",
              marginLeft: "20%",
              marginTop: "60%",
            }}
          >
            <Image
              source={require("../../../../assets/images/intro2/center.png")}
            />
          </View>
          <View style={{ alignItems: "center", marginTop: "45%" }}>
            <WelcomeText>Create a Sustainable Garden Anywhere</WelcomeText>
            <ContentText>
              It’s the perfect tool for anyone who wants to create a beautiful
              and sustainable garden, no matter where they live.
            </ContentText>
          </View>
          <NavigationContainer>
            <PrevView>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: "#FFFFFF" }}>Prev</Text>
              </TouchableOpacity>
            </PrevView>
            <DotContainer>
              <SleepDot />
              <WakeDot />
              <SleepDot />
            </DotContainer>

            <View>
              <TouchableOpacity onPress={() => navigation.navigate("welcome3")}>
                <NextText>Next</NextText>
              </TouchableOpacity>
            </View>
          </NavigationContainer>
        </BackGround>
      </BackGround>
    </ScreenView>
  );
};
