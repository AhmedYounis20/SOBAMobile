import {
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

export const ThirdWelcome = ({ navigation }) => {
  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={require("../../../../assets/images/intro3/intro3.png")}
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
          </View>
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
            <Text style={styles.largeText}>Save Money on</Text>
            <Text style={styles.largeText}>Groceries with Our App</Text>
            <Text style={styles.smallText}>
              With our app, you can grow your own fresh
            </Text>
            <Text style={styles.smallText}>
              produce and save money on groceries in the
            </Text>
            <Text style={styles.smallText}>
              process, all while contributing to a more
            </Text>
            <Text style={styles.smallText}>sustainable future.</Text>
          </View>

          <View style={styles.Container}>
            <View>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: "#FFFFFF" }}>Prev</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.dotContainer}>
              <View style={styles.sleep} />
              <View style={styles.sleep} />
              <View style={styles.wake} />
            </View>

            <View>
              <TouchableOpacity onPress={() => navigation.navigate("Account")}>
                <Text style={{ color: "#FFFFFF" }}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </>
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
