import { Button, View } from "react-native";

export const GreenHouseDetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("CropDetails")}
        title="CropDetails"
      />
    </View>
  );
};
