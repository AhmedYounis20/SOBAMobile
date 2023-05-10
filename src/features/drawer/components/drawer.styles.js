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
`;
export const LogoutItem = styled(DrawerItem)`
  color: (props) => ${(props) => props.theme.colors.text.info};
  font-family: ${(props) => props.theme.fonts.username};
`;

export const DrawerSectionTitleView=styled.View``;

export const DrawerSectionTitle=styled(Text)``;
