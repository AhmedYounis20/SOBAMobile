import React, { useContext } from "react";
import { View, Text } from "react-native";
import { List, Avatar } from "react-native-paper";

import { SafeArea } from "../../../Components/SafeArea/SafeArea.Component";
import { Button } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import styled from "styled-components";
import { Spacer } from "../../../Components/spacer/spacer.component";

const AvatarContainer = styled.View`
  align-items: center;
  justify-content: center;
`;
export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Spacer position="top" size="medium" />
      <AvatarContainer>
        <Avatar.Icon icon="human" size={180} />
        <Spacer position="top" size="medium" />
        <Text>{user.email}</Text>
        <Spacer position="top" size="xl" />
      </AvatarContainer>
      <List.Section>
        <List.Item
          title="Favourites"
          description="show your favourites"
          style={{ padding: 16 }}
          onPress={() => navigation.navigate("Favourites")}
          left={(props) => <List.Icon icon={"heart"} />}
        />
        <List.Item
          title="Logout"
          style={{ padding: 16 }}
          onPress={onLogout}
          left={(props) => <List.Icon icon={"logout"} />}
        />
      </List.Section>
    </SafeArea>
  );
};
