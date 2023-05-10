import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
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
} from "../components/drawer.styles";
const CurrentDrawerSection = ({
  items = [],
  title,
  color,
  size,
  navigation,
  ItemsContent = null,
}) => {
  return (
    <DrawerSection showDivider={false}>
      <DrawerSectionTitleView>
        <DrawerSectionTitle>{title}</DrawerSectionTitle>
      </DrawerSectionTitleView>
      {items.map((item, index) => {
        return (
          <DrawerItem
            icon={({ color, size }) => {
              if (item.includes("profile"))
                return (
                  <MaterialCommunityIcons
                    name={"account-circle-outline"}
                    color={color}
                    size={size}
                  />
                );
              else 
              return <MaterialCommunityIcons
              name={"robot-happy-outline"}
              color={color}
              size={size}
            />
            }}
            label={`${item}`}
            onPress={() => navigation.navigate(`${item}`)}
          />
        );
      })}
    </DrawerSection>
  );
};
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
        <CurrentDrawerSection
          color={props.color}
          size={props.size}
          title={"Account"}
          navigation={navigation}
          items={["profile", "profile settings", "profile styles"]}
        />
        <HairLine />
        <CurrentDrawerSection
          color={props.color}
          size={props.size}
          title={"Sensors"}
          navigation={navigation}
          items={["Sensor 1", "Sensor 2", "Sensor 3"]}
        />
        <HairLine />
        <DrawerSection showDivider={false}>
          <DrawerSectionTitleView>
            <DrawerSectionTitle>Account</DrawerSectionTitle>
          </DrawerSectionTitleView>
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
