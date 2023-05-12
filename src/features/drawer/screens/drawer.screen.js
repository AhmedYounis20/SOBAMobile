import { MaterialIcons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useContext } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Drawer } from "react-native-paper";
import styled from "styled-components";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { HairLine } from "../../../components/hairlines/hairline.component";
import {
  ProfileView,
  ProfileImage,
  ProfileName,
  ProfileUsername,
  UsernameView,
  DrawerSection,
  LogoutItem,
  DrawerSectionTitleView,
  DrawerSectionTitle,
  CurrentDrawerSection
} from "../components/drawer.styles";

export const DrawerScreen = (props) => {
  const { user, onLogout } = useContext(AuthenticationContext);
  const { navigation } = props;
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <ImageBackground
          source={require("../../../../assets/green_cover1.jpg")}
          style={{ height: 162, paddingTop: 20,borderTopRightRadius:100 }}
          borderTopRightRadius={50}
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
      </TouchableOpacity>
      <DrawerContentScrollView {...props}>
        <CurrentDrawerSection
          color={props.color}
          size={props.size}
          title={"Account"}
          navigation={navigation}
          key={"profile"}
          items={["Notifications", "Profile Settings","Notes"]}
        />
        <HairLine />
        <CurrentDrawerSection
          color={props.color}
          size={props.size}
          title={"Farm"}
          navigation={navigation}
          key={"Farm"}
          items={["Statistics", "Farm Map", "Sensors Control"]}
        />
        <HairLine />
        <DrawerSection showDivider={false}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialIcons name="logout" color={color} size={size} />
            )}
            label="logout"
            onPress={onLogout}
          />
        </DrawerSection>
      </DrawerContentScrollView>
    </>
  );
};
