import React, { useContext } from "react";
import { Text } from "react-native";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import styled from "styled-components";
import { Icon, IconTypes } from "../../../components/Icons/Icons.components";
import { ThemeContext } from "../../../services/ThemeContext/Theme.context";
import { HairLine } from "../../../components/hairlines/hairline.component";

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

const SettingsTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.title};
  margin: 20px 10px;
  color: ${(props) => props.theme.colors.text.whiteBlack};
`;

const SettingText = styled.Text`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.whiteBlack};
`;

const SettingsView = styled.View`
gap: 10px;
`;

const SettingView = styled.View`
flex-direction: row;
align-items: center;
gap: 16px;
padding: 8px;
margin: 5px 10px;
`;
// background-color: ${(props) => props.theme.colors.bg.secondary};

export default function Settings() {
  const { theme } = useContext(ThemeContext);
  return (
    <SafeArea>
      <Background />
      <SettingsView>
        <SettingsTitle>Settings</SettingsTitle>
        <SettingView>
          <Icon
            name="person"
            iconType={IconTypes.Ionicons}
            size={24}
            color={theme.colors.ui.primaryTransparent}
          />
          <SettingText>Profile</SettingText>
        </SettingView>
        <SettingView>
          <Icon
            name="notifications"
            iconType={IconTypes.Ionicons}
            size={24}
            color={theme.colors.ui.primaryTransparent}
          />
          <SettingText>Notifications</SettingText>
        </SettingView>
        <SettingView>
          <Icon
            name="moon"
            iconType={IconTypes.Ionicons}
            size={24}
            color={theme.colors.ui.primaryTransparent}
          />
          <SettingText>Dark theme</SettingText>
        </SettingView>
        <SettingView>
          <Icon
            name="share"
            iconType={IconTypes.FontAwesome}
            size={24}
            color={theme.colors.ui.primaryTransparent}
          />
          <SettingText>Share the app</SettingText>
        </SettingView>
        <SettingView>
          <Icon
            name="help-circle-outline"
            iconType={IconTypes.Ionicons}
            size={24}
            color={theme.colors.ui.primaryTransparent}
          />
          <SettingText>Help</SettingText>
        </SettingView>
        <SettingView>
          <Icon
            name="log-out"
            iconType={IconTypes.Feather}
            size={24}
            color={theme.colors.ui.primaryTransparent}
          />
          <SettingText>Log out</SettingText>
        </SettingView>
      </SettingsView>
    </SafeArea>
  );
}
