import {
  Button,
  ImageBackground,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import { StyleSheet } from "react-native";

export const FirstWelcome = ({ navigation }) => {
  return (
    <SafeArea>
      <ImageBackground
        resizeMode="cover"
        source={require("../../../../assets/images/intro1/intro1.png")}
        style={{ height: "100%" }}
      >
        <ImageBackground
          resizeMode="cover"
          source={require("../../../../assets/images/Black_frame.png")}
          style={{ height: "100%" }}
        >
          <View style={styles.header}>
            <View style={{ width: "10%" }}>
              <Image
                source={require("../../../../assets/images/intro1/left.png")}
              />
            </View>
            <View
              style={{
                position: "absolute",
                marginLeft: "42%",
                marginBottom: "60%",
              }}
            >
              <Image
                source={require("../../../../assets/images/top_center.png")}
              />
            </View>
            <View>
              <Image
                source={require("../../../../assets/images/intro1/right.png")}
              />
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../../../assets/images/intro1/center.png")}
            />
          </View>
          <View style={{ alignItems: "center", marginTop: "9%" }}>
            <Text style={styles.largeText}>
              Welcome to{" "}
              <Image source={require("../../../../assets/images/Logo.png")} />
            </Text>
            <Text style={styles.smallText}>
              Our app is designed to help you create a
            </Text>
            <Text style={styles.smallText}>
              thriving garden in a controlled and
            </Text>
            <Text style={styles.smallText}>sustainable environment.</Text>
          </View>
          <View style={styles.Container}>
            <View style={styles.dotContainer}>
              <View style={styles.wake} />
              <View style={styles.sleep} />
              <View style={styles.sleep} />
            </View>

            <View style={{}}>
              <TouchableOpacity
                style={{ justifyContent: "flex-end" }}
                onPress={() => navigation.navigate("welcome2")}
              >
                <Text style={{ color: "#FFFFFF", marginRight: "8%" }}>
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sleep: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#414141",
    marginHorizontal: 3,
  },
  wake: {
    width: 10,
    height: 10,
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 3,
  },
  Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    alignItems: "center",
    position: "absolute",
    bottom: 60,
    left: 0,
    right: 0,
    width: "100%",
  },
  dotContainer: {
    flexDirection: "row",
    marginLeft: "42.5%",
  },
  largeText: {
    fontSize: 29,
    color: "#27AE60",
    fontWeight: "800",
    letterSpacing: 2,
  },
  smallText: {
    fontSize: 15,
    color: "#27AE60",
    letterSpacing: 0.6,
  },
});
