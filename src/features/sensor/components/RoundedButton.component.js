import { TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { Icon, IconTypes } from "../../../components/Icons/Icons.components";

export const RoundedButton = ({ children, color = "black", onPress }) => {
  return (
    <TouchableOpacity
      style={{
        height: 60,
        width: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
      }}
      onPress={onPress}
    >
      <Card
        style={{
          height: 50,
          width: 50,
          borderRadius: 50,
          backgroundColor: color,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </Card>
    </TouchableOpacity>
  );
};
