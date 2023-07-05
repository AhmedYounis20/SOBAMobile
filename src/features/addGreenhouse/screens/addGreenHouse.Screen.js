import { Switch, TextInput } from "react-native-paper";
import styled from "styled-components";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../services/ThemeContext/Theme.context";

const FormView = styled.View`
  gap: 10px;
`;

const SwitchView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const SwitchLabel = styled.Text``;

export const AddGreenHouseScreen = () => {
  const { theme } = useContext(ThemeContext);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <SafeArea>
      <FormView>
        <TextInput label="Greenhouse Name" />
        <TextInput label="Longitude" />
        <TextInput label="Latitude" />
        <TextInput label="Area" />
        <TextInput label="Notes" />
        <SwitchView>
          <SwitchLabel>I have my own greenhouse</SwitchLabel>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </SwitchView>
      </FormView>
    </SafeArea>
  );
};
