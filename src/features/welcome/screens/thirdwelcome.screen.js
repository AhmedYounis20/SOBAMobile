import { Text, Image, View, TouchableOpacity } from "react-native";
import {
  BackGround,
  ContentText,
  DotContainer,
  HeaderView,
  NavigationContainer,
  NextText,
  PrevView,
  SleepDot,
  WakeDot,
  WelcomeText,
} from "../components/welcome.styles";

export const ThirdWelcome = ({ navigation }) => {
  return (
    <>
      <BackGround
        resizeMode="cover"
        source={require("../../../../assets/images/intro3/intro3.png")}
        style={{ height: "100%" }}
      >
        <BackGround
          resizeMode="cover"
          source={require("../../../../assets/images/Black_frame.png")}
        >
          <HeaderView>
            <View>
              <Image
                source={require("../../../../assets/images/intro3/left.png")}
              />
            </View>
            <View
              style={{
                position: "absolute",
                marginLeft: "42%",
                marginBottom: "100%",
              }}
            >
              <Image
                source={require("../../../../assets/images/top_center.png")}
              />
            </View>
            <View>
              <Image
                source={require("../../../../assets/images/intro3/right.png")}
              />
            </View>
          </HeaderView>
          <View
            style={{
              alignItems: "center",
              position: "absolute",
              marginLeft: "20%",
              marginTop: "50%",
            }}
          >
            <Image
              source={require("../../../../assets/images/intro3/center.png")}
            />
          </View>
          <View style={{ alignItems: "center", marginTop: "35%" }}>
            <WelcomeText> Save Money on Groceries with Our App</WelcomeText>
            <ContentText>
              With our app, you can grow your own fresh produce and save money
              on groceries in the process, all while contributing to a more
              sustainable future.
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
              <SleepDot />
              <WakeDot />
            </DotContainer>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("goingToAccount")}
              >
                <NextText>Next</NextText>
              </TouchableOpacity>
            </View>
          </NavigationContainer>
        </BackGround>
      </BackGround>
    </>
  );
};
