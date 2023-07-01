import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import {
  Text,
  Image,
  ImageBackground,
  Button,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

export const SecondWelcome = ({ navigation }) => {
  return (
    <SafeArea>
      <ImageBackground
        resizeMode="cover"
        source={require("../../../../assets/images/intro2/intro2.png")}
        style={{ height: "100%" }}
      >
        <ImageBackground
          resizeMode="cover"
          source={require("../../../../assets/images/Black_frame.png")}
          style={{ height: "100%" }}
        >
          <View style={styles.header}>
            <View>
              <Image
                source={require("../../../../assets/images/intro2/left.png")}
              />
            </View>
            <View
              style={{
                position: "absolute",
                marginLeft: "42%",
                marginBottom: "80%",
              }}
            >
              <Image
                source={require("../../../../assets/images/top_center.png")}
              />
            </View>
            <View>
              <Image
                source={require("../../../../assets/images/intro2/right.png")}
              />
            </View>
          </View>
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
            <Text style={styles.largeText}>Create a Sustainable</Text>
            <Text style={styles.largeText}>Garden Anywhere</Text>
            <Text style={styles.smallText}>
              It’s the perfect tool for anyone who wants to
            </Text>
            <Text style={styles.smallText}>
              create a beautiful and sustainable garden,
            </Text>
            <Text style={styles.smallText}>no matter where they live.</Text>
          </View>
          <View style={styles.Container}>
            <View>
              <TouchableOpacity
                style={{ justifyContent: "flex-end" }}
                onPress={() => navigation.goBack()}
              >
                <Text style={{ color: "#FFFFFF" }}>Prev</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.dotContainer}>
              <View style={styles.sleep} />
              <View style={styles.wake} />
              <View style={styles.sleep} />
            </View>

            <View>
              <TouchableOpacity
                style={{ justifyContent: "flex-end" }}
                onPress={() => navigation.navigate("welcome3")}
              >
                <Text style={{ color: "#FFFFFF" }}>Next</Text>
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
    paddingRight: "8%",
    paddingLeft: "8%",
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
    paddingRight: "8%",
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
