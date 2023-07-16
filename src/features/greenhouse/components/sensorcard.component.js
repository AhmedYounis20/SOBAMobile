import styled from "styled-components";
import { useContext, useState } from "react";
import { Card, Switch } from "react-native-paper";
import { TouchableOpacity, View } from "react-native";

import { RowView } from "../../../components/views/row.component";
import { Icon } from "../../../components/Icons/Icons.components";
import { Text } from "../../../components/typography/text.component";
import { ThemeContext } from "../../../services/ThemeContext/Theme.context";

const BodyView = styled.View`
  padding: 12px;
`;

const SensorTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const SensorData = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const DataCard = styled(Card)`
  width: 40%;
  margin: 5%;
  height: 150px;
`;

export const SensorCard = ({
  navigation,
  name,
  value,
  unit,
  iconName,
  iconType,
  sensor,
  sensors,
}) => {
  const { theme } = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    // await fetch(sensor.actuatorUrl,{}).then(res=>res.json());
    console.log(sensor.actuatorUrl);
  };
  let front_color = isEnabled
    ? theme.colors.bg.secondary
    : theme.colors.text.primary;
  let back_color = !isEnabled
    ? theme.colors.bg.secondary
    : theme.colors.text.primary;
  return (
    <DataCard
      style={{
        backgroundColor: back_color,
      }}
    >
      <RowView>
        <View style={{ flex: 1, margin: 15 }}>
          <Icon
            name={iconName}
            iconType={iconType}
            size={30}
            color={front_color}
          />
        </View>
        <Switch
          trackColor={{ false: "#AAAAAA", true: "#005500" }}
          thumbColor={isEnabled ? "#FFFFFF" : "#555555"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </RowView>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("SensorControl", {
            sensor: sensor,
            sensors: sensors,
          })
        }
      >
        <BodyView>
          <SensorTitle style={{ color: front_color }}>{name}</SensorTitle>
          <SensorData style={{ color: front_color }}>
            {value} {unit}
          </SensorData>
        </BodyView>
      </TouchableOpacity>
    </DataCard>
  );
};
