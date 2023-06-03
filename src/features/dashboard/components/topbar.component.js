import styled from "styled-components";
import { React, useState, useContext } from "react";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Searchbar } from "react-native-paper";
import { TouchableOpacity, View, TextInput, Image } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Feather, Ionicons, Octicons, SimpleLineIcons } from "@expo/vector-icons";
import { Text } from "../../../components/typography/text.component";

const TopbarContainer = styled.View`
  gap: 10px;
`;

const HelloView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const NotificationView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const AccountIcon = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  border-width: 2px;
  border-color: #008800;
`;

const Logo = styled.Image`
  width: 40px;
  height: 40px;
  // border-radius: 30px;
  // border-width: 2px;
  // border-color: #008800;
`;

const BrandName = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: #008800;
`;

const GreetUser = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h4};
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: #008800;
`;

const SearchContainer = styled.View`
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  border: 2px solid #008800;
  border-radius: 24px;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  margin-left: 10px;
`;

export const Topbar = ({ nav }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <TopbarContainer>
      <HelloView>
        <TouchableOpacity onPress={nav.openDrawer}>
          {/* <AccountIcon source={require("../../../../assets/home_bg.jpg")} /> */}
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Logo source={require("../../../../assets/logo-no-background.png")} />
        <BrandName>SOBA</BrandName>
        <NotificationView>
          <Ionicons name="notifications" size={24} color="black" />
        </NotificationView>
      </HelloView>
      {/* <SearchContainer>
        <Octicons name="search" size={24} color="#008800" />
        <SearchInput placeholder="Search" />
        <SimpleLineIcons name="microphone" size={24} color="#008800" />
      </SearchContainer> */}
    </TopbarContainer>
  );
};
