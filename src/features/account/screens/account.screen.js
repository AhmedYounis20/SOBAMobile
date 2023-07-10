import {
  Background,
  CenterView,
  GuideButtonsView,
  MainGuideButton,
  Titletext,
  WhiteText,
} from "../components/account.styles";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { Icon, IconTypes } from "../../../components/Icons/Icons.components";
import { ScreenView } from "../../../components/views/screenView.component";
export const AccountScreen = ({ navigation }) => (
  <ScreenView>
    <Background
      resizeMode="cover"
      source={require("../../../../assets/images/account/account.png")}
    >
      <View style={{ height: "100%", backgroundColor: "rgba(1,50,22,0.9)" }}>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 60,
            }}
          >
            <Text style={{ fontSize: 40, fontWeight: "800", color: "#27AE60" }}>
              S
            </Text>
            <Image
              style={{
                width: 60,
                height: 60,
              }}
              resizeMethod="scale"
              resizeMode="contain"
              source={require("../../../../assets/images/small_logo.png")}
            />
            <Text
              style={{
                fontSize: 40,
                fontWeight: "800",
                color: "#27AE60",
                letterSpacing: 3,
              }}
            >
              BA
            </Text>
          </View>
          <Image
            style={{
              width: 300,
              height: 300,
              marginVertical: 20,
            }}
            resizeMethod="scale"
            resizeMode="cover"
            source={require("../../../../assets/images/account/account_center.png")}
          />
        </View>
        <CenterView>
          <Titletext>
            Join us now to start your sustainable gardening journey.
          </Titletext>
        </CenterView>
        <GuideButtonsView>
          <MainGuideButton
            textColor="#FFFFFF"
            onPress={() => navigation.navigate("register")}
          >
            Sign up
          </MainGuideButton>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              color: "#FFFFFF",
              marginTop: 15,
            }}
          >
            <WhiteText>Already have an account? </WhiteText>
            <Button onPress={() => navigation.navigate("login")}>
              <WhiteText>Log in</WhiteText>
            </Button>
          </View>
        </GuideButtonsView>
        <View style={{ marginTop: 50, left: 20, position: "absolute" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>
              <Icon
                iconType={IconTypes.AntDesign}
                name="leftcircleo"
                size={30}
                color="#FFFFFF"
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  </ScreenView>
);
