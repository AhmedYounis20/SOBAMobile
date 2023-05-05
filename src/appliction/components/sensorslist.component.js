import styled from "styled-components";
import { Text } from "../../components/typography/text.component";

const SensorReadView = styled.View`
  margin: ${(props) => props.theme.space[3]};
`;

const SensorRead = ({ property = "Humidity", value = "30%" }) => {
  return (
    <>
      <Text variant="body">{property}</Text>
      <Text variant="label">{value}</Text>
    </>
  );
};

const sensorData = [
  {
    property: "Humidity",
    value: "30%",
  },
  {
    property: "Precpitation",
    value: "5.1mL",
  },
  {
    property: "Pressure",
    value: "450hPa",
  },
  {
    property: "Wind",
    value: "23m/s",
  },
];

export const SensorsList = () => {
  return (
    <>
      {sensorData.map((item) => (
        <SensorReadView>
          <SensorRead property={item.property} value={item.value} />
        </SensorReadView>
      ))}
    </>
  );
};
