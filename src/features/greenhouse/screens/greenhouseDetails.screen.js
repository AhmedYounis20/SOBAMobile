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


/*
* N# of seasons
* current season
* types of plant that has been harvested
* green house name and area
* no. of sensors and actuators
* ratio of healthy crops in each harvest
*/