import { View, Text } from "react-native";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import { Button } from "react-native";
import { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/spacer.component";

export const HomeScreen = () => {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {JSON.stringify(user)}
        </Text>
        <Spacer position={"top"} size="large" />
      </View>
      <View style={{ width: "40%",alignSelf:"center" }}>
        <Button title="logout" onPress={onLogout} />
      </View>
    </View>
  );
};
