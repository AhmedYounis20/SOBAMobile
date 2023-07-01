import { Text, View } from "react-native";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import { Button } from "react-native";

export const ThirdWelcome = ({ navigation }) => {
  return (
    <SafeArea>
      <View
        style={{ flex: 1, alignItems: "stretch", justifyContent: "center" }}
      >
        <View style={{ margin: 30 }}>
          <Button onPress={() => navigation.goBack()} title="previous" />
        </View>

        <View style={{ margin: 30 }}>
          <Button
            onPress={() => navigation.navigate("Account")}
            title="go to account"
          />
        </View>
      </View>
    </SafeArea>
  );
};
