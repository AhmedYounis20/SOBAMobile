import { RowView } from "../../../components/views/row.component";
import { Card, Switch } from "react-native-paper";
import { useState } from "react";
import { Icon } from "../../../components/Icons/Icons.components";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { Text } from "../../../components/typography/text.component";

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
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  let front_color = isEnabled ? "#FFFFFF" : "#008800";
  let back_color = !isEnabled ? "#FFFFFF" : "#008800";
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
      <TouchableOpacity onPress={() => navigation.navigate("SensorControl")}>
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
