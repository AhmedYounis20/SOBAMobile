import { MaterialIcons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useContext, useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { HairLine } from "../../../components/hairlines/hairline.component";
import { light } from "../../../infrastructure/theme/light";
import { dark } from "../../../infrastructure/theme/dark";
import {
  ProfileView,
  ProfileImage,
  ProfileName,
  ProfileUsername,
  UsernameView,
  DrawerSection,
  CurrentDrawerSection,
} from "../components/drawer.styles";
import { ThemeContext } from "../../../services/ThemeContext/Theme.context";
import { Switch } from "react-native-paper";
import { Icon, IconTypes } from "../../../components/Icons/Icons.components";
import styled from "styled-components";

const DarkThemeView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 20px;
`;

export const DrawerScreen = (props) => {
  const { onLogout } = useContext(AuthenticationContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isDark, setIsDark] = useState(theme === dark);

  const { navigation } = props;
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <ImageBackground
          source={require("../../../../assets/green_cover1.jpg")}
          style={{ height: 162, paddingTop: 20, borderTopRightRadius: 100 }}
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
      <DrawerContentScrollView
        {...props}
        style={{ backgroundColor: theme.colors.bg.primary }}
      >
        <CurrentDrawerSection
          size={props.size}
          title={"Account"}
          navigation={navigation}
          key={"profile"}
          items={["Notifications", "Profile Settings", "Notes"]}
        />
        <HairLine />
        <CurrentDrawerSection
          size={props.size}
          title={"Farm"}
          navigation={navigation}
          key={"Farm"}
          items={[
            "Disease Detection",
            "Statistics",
            "Farm Map",
            "Sensors Control",
          ]}
        />
        <HairLine />
        <DrawerSection showDivider={false}>
          <DarkThemeView>
            <Icon
              iconType={IconTypes.FontAwesome5}
              name={"moon"}
              size={props.size}
              color={theme.colors.text.disabled}
            />
            <Text
              style={{
                color: theme.colors.text.disabled,
                fontSize: props.size,
                fontWeight: "bold",
                marginLeft: "12%",
                width: "65%",
              }}
            >
              Dark theme
            </Text>
            <Switch
              trackColor="#AAAAAA"
              thumbColor="#FFFFFF"
              onValueChange={() => {
                toggleTheme();
                setIsDark(!isDark);
              }}
              value={isDark}
            />
          </DarkThemeView>
        </DrawerSection>
        <HairLine />
        <DrawerSection showDivider={false}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialIcons
                name="logout"
                color={theme.colors.text.disabled}
                size={size}
              />
            )}
            label="Logout"
            onPress={onLogout}
            labelStyle={{ color: theme.colors.text.disabled }}
          />
        </DrawerSection>
      </DrawerContentScrollView>
    </>
  );
};
