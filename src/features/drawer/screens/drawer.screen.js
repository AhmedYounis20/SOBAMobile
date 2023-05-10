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
} from "../components/drawer.styles";

export const DrawerScreen = (props) => {
  const { user, onLogout } = useContext(AuthenticationContext);
  const { navigation } = props;
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <ImageBackground
          source={require("../../../../assets/profile_background.png")}
          style={{ height: 162, paddingTop: 20 }}
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
        {/* <DrawerItemList {...props}  /> */}
        <DrawerSection showDivider={false}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialIcons name="account-circle" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => {
              props.navigation.navigate("Profile");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialIcons name="account-circle" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => {
              props.navigation.navigate("Profile");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialIcons name="account-circle" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => {
              props.navigation.navigate("Profile");
            }}
          />
        </DrawerSection>
        <HairLine />
        <DrawerSection showDivider={false}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialIcons name="account-circle" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => {
              props.navigation.navigate("Profile");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialIcons name="account-circle" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => {
              props.navigation.navigate("Profile");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialIcons name="account-circle" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => {
              props.navigation.navigate("Profile");
            }}
          />
        </DrawerSection>
        <HairLine />
        <DrawerSection showDivider={false}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialIcons name="account-circle" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => {
              props.navigation.navigate("Profile");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialIcons name="account-circle" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => {
              props.navigation.navigate("Profile");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialIcons name="account-circle" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => {
              props.navigation.navigate("Profile");
            }}
          />
        </DrawerSection>
      </DrawerContentScrollView>
      <HairLine />
      <DrawerSection showDivider={false}>
        <LogoutItem
          icon={({ color, size }) => (
            <MaterialIcons name="logout" color={color} size={size} />
          )}
          label="logout"
          onPress={onLogout}
        />
      </DrawerSection>
    </>
  );
};
