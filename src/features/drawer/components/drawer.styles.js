import styled from "styled-components";
import { Drawer } from "react-native-paper";
import { Image, Text } from "react-native";
import { DrawerItem } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { ThemeContext } from "../../../services/ThemeContext/Theme.context";
export const ProfileImage = styled(Image)`
  height: 89px;
  width: 89px;
  margin-top: 26px;
  margin-left: 18px;
`;
export const ProfileView = styled.View`
  flex-direction: row;
`;
export const UsernameView = styled.View`
  margin-top: 50px;
  margin-left: 28px;
`;
export const ProfileName = styled(Text)`
  font-style: normal;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.text.primary};
  line-height: 24px;
  align-self: stretch;
`;
export const ProfileUsername = styled(Text)`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  color: ${(props) => props.theme.colors.text.primary};
  line-height: 18px;
  align-self: stretch;
`;
export const DrawerSection = styled(Drawer.Section)`
  margin-bottom: 15px;
  padding-left: 0px;
`;
export const DrawerSectionTitleView = styled.View`
  padding-left: 18px;
  padding-bottom: 10px;
`;
export const DrawerSectionTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const CurrentDrawerSection = ({
  items = [],
  title,
  size,
  navigation,
  ItemsContent = null,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <DrawerSection showDivider={false}>
      <DrawerSectionTitleView>
        <DrawerSectionTitle>{title}</DrawerSectionTitle>
      </DrawerSectionTitleView>
      {items.map((item, index) => {
        return (
          <DrawerItem
            icon={({ size }) => {
              let iconName = "";
              if (item.includes("Profile")) iconName = "account-outline";
              else if (item.includes("Sensor"))
                iconName = "robot-happy-outline";
              else if (item.includes("Notifications"))
                iconName = "bell-outline";
              else if (item.includes("Notes")) iconName = "notebook-outline";
              else if (item.includes("Statistics"))
                iconName = "chart-line-variant";
              else if (item.includes("Map")) iconName = "map";
              else if (item.includes("Disease Detection"))
                iconName = "magnify-scan";

              return (
                <MaterialCommunityIcons
                  name={iconName}
                  color={theme.colors.text.disabled}
                  size={size}
                />
              );
            }}
            label={`${item}`}
            onPress={() => navigation.navigate(`${item}`)}
            key={`${title}-${index}`}
            labelStyle={{ color: theme.colors.text.disabled }}
          />
        );
      })}
    </DrawerSection>
  );
};
