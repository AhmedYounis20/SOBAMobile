import styled from "styled-components";
import { Drawer } from "react-native-paper";
import { HairLine } from "../../../components/hairlines/hairline.component";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
  font-family: ${(props) => props.theme.fonts.profileName};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.bg.primary};
  line-height: 24px;
  align-self: stretch;
`;
export const ProfileUsername = styled(Text)`
  font-family: ${(props) => props.theme.fonts.username};
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  color: ${(props) => props.theme.colors.bg.primary};
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
`;

export const CurrentDrawerSection = ({
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
              console.log(`${title}-${index}`);
              return (
                <MaterialCommunityIcons
                  name={
                    item.includes("profile")
                      ? "account-circle-outline"
                      : "robot-happy-outline"
                  }
                  color={color}
                  size={size}
                />
              );
            }}
            label={`${item}`}
            onPress={() => navigation.navigate(`${item}`)}
            key={`${title}-${index}`}
          />
        );
      })}
    </DrawerSection>
  );
};