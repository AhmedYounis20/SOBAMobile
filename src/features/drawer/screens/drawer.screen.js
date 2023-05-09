import { MaterialIcons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useContext } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { Drawer } from "react-native-paper";
import styled from "styled-components";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileImage = styled(Image)`
  height: 89px;
  width: 89px;
  margin-top: 26px;
  margin-left: 18px;
`;
const ProfileView = styled.View`
  flex-direction: row;
`;
const UsernameView = styled.View`
  margin-top: 50px;
  margin-left: 28px;
`;
const ProfileName = styled(Text)`
  font-style: normal;
  font-family: ${(props) => props.theme.fonts.profileName};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.bg.primary};
  line-height: 24px;
  align-self: stretch;
`;
const ProfileUsername = styled(Text)`
  font-family: ${(props) => props.theme.fonts.username};
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  color: ${(props) => props.theme.colors.bg.primary};
  line-height: 18px;
  align-self: stretch;
`;
const LogoutSection = styled(Drawer.Section)` 
margin-bottom:15px;
`;
export const DrawerScreen = (props) => {
  const { user, onLogout } = useContext(AuthenticationContext);
  return (
    <>

        <ImageBackground
          source={require("../../../../assets/profile_background.png")}
          style={{ height: 162,paddingTop:20 }}
        >
          <ProfileView>
            <ProfileImage
              source={require("../../../../assets/profile_picture.png")}
            />
            <UsernameView>
              <ProfileName>Amanda Smith</ProfileName>
              <ProfileUsername>@amandasmith</ProfileUsername>
            </UsernameView>
          </ProfileView>
        </ImageBackground>
        <Drawer.Section style={{flex:1}}>
      <DrawerContentScrollView {...props}>
        <Drawer.Section style={{flex:1}}>
        <DrawerItemList {...props} />
        </Drawer.Section>
      </DrawerContentScrollView>
      </Drawer.Section>

      <LogoutSection showDivider={false}  >
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialIcons name="logout" color={color} size={size} />
          )}
          label="logout"
          onPress={onLogout}

        />
      </LogoutSection>

    </>
  );
};
