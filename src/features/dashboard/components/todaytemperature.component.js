import styled from "styled-components";
import { Text } from "../../../components/typography/text.component";
import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";
import { Icon, IconTypes } from "../../../components/Icons/Icons.components";
import { useContext } from "react";
import { ThemeContext } from "../../../services/ThemeContext/Theme.context";

const TemperatureView = styled.View`
  flex-direction: row;
  gap: 16px;
  padding: ${(props) => props.theme.space[2]};
`;

const TemperatureDegView = styled.View`
  flex-direction: row;
  gap: 4px;
`;

const DataText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const TodayTemperature = ({ h = "23", l = "14" }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <TemperatureView>
      <TemperatureDegView>
        <Icon
          iconType={IconTypes.FontAwesome5}
          name="temperature-low"
          size={20}
          color={theme.colors.ui.primary}
        />
        <DataText>{h}°C</DataText>
      </TemperatureDegView>
      <TemperatureDegView>
        <Icon
          iconType={IconTypes.FontAwesome5}
          name="temperature-high"
          size={20}
          color={theme.colors.ui.primary}
        />
        <DataText>{h}°C</DataText>
      </TemperatureDegView>
    </TemperatureView>
  );
};
