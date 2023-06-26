import styled from "styled-components";
import { Text } from "../../../components/typography/text.component";

const WeatherReadContainer = styled.View`
  flex-direction:column
  align-items:center;
  gap:5px;
`;

const WeatherReadView = styled.View`
  margin: ${(props) => props.theme.space[3]};
`;

const ValueText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  color: ${(props) => props.theme.colors.text.primary};
`;

const PropertyText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  color: ${(props) => props.theme.colors.text.primary};
`;

const WeatherRead = ({ property = "Humidity", value = "30%" }) => {
  return (
    <>
      <WeatherReadContainer>
        <ValueText>{value}</ValueText>
        <PropertyText>{property}</PropertyText>
      </WeatherReadContainer>
    </>
  );
};

const weatherData = [
  {
    property: "Humidity",
    value: "30%",
  },
  {
    property: "Temperature",
    value: "11°C",
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
  {
    property: "Wind",
    value: "23m/s",
  },
  {
    property: "Wind",
    value: "23m/s",
  },
  {
    property: "Wind",
    value: "23m/s",
  },
];

export const WeatherDataList = () => {
  return (
    <>
      {weatherData.map((item, index) => (
        <WeatherReadView key={index}>
          <WeatherRead property={item.property} value={item.value} />
        </WeatherReadView>
      ))}
    </>
  );
};
