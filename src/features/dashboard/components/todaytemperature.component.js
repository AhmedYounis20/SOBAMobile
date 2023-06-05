import styled from "styled-components";
import { Text } from "../../../components/typography/text.component";
import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";

const TemperatureView = styled.View`
  flex-direction: row;
  gap: 16px;
  padding: ${(props) => props.theme.space[2]};
`;

const TemperatureDegView = styled.View`
  flex-direction: row;
  gap:4px;
`;

export const TodayTemperature = ({ h = "23", l = "14" }) => {
  return (
    <TemperatureView>
      <TemperatureDegView>
        <FontAwesome5 name="temperature-low" size={20} color="#008800" />
        <Text variant="body">{h}°C</Text>
      </TemperatureDegView>
      <TemperatureDegView>
        <FontAwesome5 name="temperature-high" size={20} color="#008800" />
        <Text variant="body">{h}°C</Text>
      </TemperatureDegView>
    </TemperatureView>
  );
};
