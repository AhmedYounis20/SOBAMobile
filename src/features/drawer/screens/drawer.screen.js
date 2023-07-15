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
import { ScreenView } from "../../../components/views/screenView.component";

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
    <ScreenView>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <View
          style={{
            height: 140,
            paddingTop: 10,
            backgroundColor: theme.colors.bg.secondary,
          }}
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
        </View>
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
          items={["Notifications", "Notes"]}
        />
        <HairLine />
        <CurrentDrawerSection
          size={props.size}
          title={"Farm"}
          navigation={navigation}
          key={"Farm"}
          items={["Disease Detection", "Statistics", "Farm Map"]}
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
    </ScreenView>
  );
};
