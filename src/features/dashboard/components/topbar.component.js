import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { React, useState, useContext } from "react";

import { ThemeContext } from "../../../services/ThemeContext/Theme.context";
import { Icon, IconTypes } from "../../../components/Icons/Icons.components";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const TopbarContainer = styled.View``;

const AppNameContainer = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: row;
`;
const HelloView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const NotificationView = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const BrandName = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.text.whiteBlack};
`;

export const Topbar = ({ nav }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const { theme } = useContext(ThemeContext);
  return (
    <TopbarContainer>
      <HelloView>
        <TouchableOpacity onPress={nav.openDrawer}>
          <Icon
            iconType={IconTypes.Feather}
            name="menu"
            size={24}
            color={theme.colors.text.whiteBlack}
          />
        </TouchableOpacity>
        <AppNameContainer>
          <BrandName>SOBA</BrandName>
        </AppNameContainer>
        <NotificationView>
          <Icon
            iconType={IconTypes.Ionicons}
            name="notifications"
            size={24}
            color={theme.colors.text.whiteBlack}
          />
        </NotificationView>
      </HelloView>
    </TopbarContainer>
  );
};
