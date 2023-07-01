import { Button, Text, View } from "react-native";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";

export const FirstWelcome = ({ navigation }) => {
  return (
    <SafeArea>
      <View
        style={{ flex: 1, alignItems: "stretch", justifyContent: "center" }}
      >
        <View style={{ margin: 30 }}>
          <Button
            onPress={() => navigation.navigate("welcome2")}
            title="next"
          />
        </View>
      </View>
    </SafeArea>
  );
};
