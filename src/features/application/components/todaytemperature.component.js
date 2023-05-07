import styled from "styled-components";
import { Text } from "../../../components/typography/text.component";

const TemperatureView = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

export const TodayTemperature = ({ h = "23", l = "14" }) => {
  return (
    <TemperatureView>
      <Text variant="body">H: {h}°C</Text>
      <Text variant="body">L: {l}°C</Text>
    </TemperatureView>
  );
};
