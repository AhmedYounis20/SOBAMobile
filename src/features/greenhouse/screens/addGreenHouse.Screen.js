import { Button, Switch, TextInput } from "react-native-paper";
import styled from "styled-components";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../services/ThemeContext/Theme.context";
import { Platform, ScrollView } from "react-native";
import * as Location from "expo-location";
import { ScreenView as FullScreenView } from "../../../components/views/screenView.component";
const Background = styled.View`
  height: 14%;
  width: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
`;

const ScreenView = styled(ScrollView)`
  flex: 1;
  margin: 20% 2% 0 2%;
`;

const ScreenTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.white};
  margin: 7% 1% 0 1%;
  padding: ${(props) => props.theme.space[3]};
`;

const FormView = styled.View`
  gap: 10px;
  align-items: center;
`;

const SectionTitleView = styled.View`
  width: 95%;
  align-items: flex-start;
`;

const SectionTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.primary};
`;

const LocationFieldView = styled.View`
  width: 95%;
  background-color: ${(props) => props.theme.colors.ui.disabled};
  border-radius: 10px;
  padding: 2px;
  flex-direction: row;
  align-items: center;
`;

const InputFieldView = styled.View`
  width: 95%;
  background-color: ${(props) => props.theme.colors.ui.primaryTransparent};
  border-radius: 10px;
  padding: 2px;
  flex-direction: row;
  align-items: center;
`;
const Input = styled(TextInput).attrs({
  mode: "flat",
  underlineColor: "transparent",
  outlineColor: "transparent",
  activeOutlineColor: "transparent",
  activeUnderlineColor: "rgba(0,0,0,0.50)",
})`
  background-color: transparent;
  width: 95%;
  left: 5px;
  marginright: 10px;
`;
const SwitchView = styled.View`
  flex-direction: row;
  width: 95%;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

const SwitchLabel = styled.Text`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
`;

const AddButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.ui.primary};
  margin: ${(props) => props.theme.space[2]} 2.5%;
`;

export const AddGreenHouseScreen = () => {
  const { theme } = useContext(ThemeContext);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [currentLocation, setCurrnentLocation] = useState({
    longitude: 31,
    latitude: 30,
  });
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.error("Permission to access location was denied");

        return;
      }
      const expoLocation = await Location.getCurrentPositionAsync({});
      const location = expoLocation.coords;
      setCurrnentLocation({
        longitude: location.longitude,
        latitude: location.latitude,
      });
    })();
  }, []);

  return (
    <FullScreenView>
      <Background>
        <ScreenTitle>add green house</ScreenTitle>
      </Background>
      <ScreenView>
        <FormView>
          <SectionTitleView>
            <SectionTitle>Location</SectionTitle>
          </SectionTitleView>
          <LocationFieldView>
            <Input label="Longitude" value={`${currentLocation.longitude}`} />
          </LocationFieldView>
          <LocationFieldView>
            <Input label="Latitude" value={`${currentLocation.latitude}`} />
          </LocationFieldView>
          <SectionTitleView>
            <SectionTitle>Dimensions</SectionTitle>
          </SectionTitleView>
          <InputFieldView>
            <Input label="Width(m)" />
          </InputFieldView>
          <InputFieldView>
            <Input label="Length(m)" />
          </InputFieldView>
          <SectionTitleView>
            <SectionTitle>Basic infomation</SectionTitle>
          </SectionTitleView>
          <InputFieldView>
            <Input label="Greenhouse Name" />
          </InputFieldView>
          <InputFieldView>
            <Input label="Description" />
          </InputFieldView>
          <SwitchView>
            <SwitchLabel>I have my own greenhouse</SwitchLabel>
            <Switch
              color={theme.colors.ui.primaryTransparent}
              value={isSwitchOn}
              onValueChange={onToggleSwitch}
            />
          </SwitchView>
        </FormView>
      </ScreenView>
      <AddButton icon="plus-circle" mode="contained">
        Add
      </AddButton>
    </FullScreenView>
  );
};
