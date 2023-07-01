import { Button, View } from "react-native";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import { Text } from "react-native";

export const SecondWelcome = ({ navigation }) => {
  return (
    <SafeArea>
      <View
        style={{
          flex: 1,
          alignItems: "stretch",
          justifyContent: "center",
        }}
      >
        <View style={{ margin: 30 }}>
          <Button onPress={() => navigation.goBack()} title="previous" />
        </View>
        <View style={{ margin: 30 }}>
          <Button
            onPress={() => navigation.navigate("welcome3")}
            title="next"
          />
        </View>
      </View>
    </SafeArea>
  );
};
