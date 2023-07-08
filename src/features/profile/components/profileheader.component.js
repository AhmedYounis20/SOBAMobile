import styled from "styled-components";
import { Image, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../../../services/ThemeContext/Theme.context";
import { Icon, IconTypes } from "../../../components/Icons/Icons.components";

const ProfileHeaderViews = styled.View``;

const ProfileCover = styled.View`
  height: 250px;
`;

const Cover = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const ProfileAvatar = styled(Image)`
  width: 89px;
  height: 89px;
  border-radius: 45px;
  left: 38%;
  top: 25%;
  position: absolute;
`;

const ProfileNameView = styled.View`
  align-items: center;
  left: 30%;
  top: 70%;
  position: absolute;
`;

const ProfileNameText = styled.Text`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.primary};
`;

const UserNameText = styled.Text`
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.text.primary};
`;

const NavigationButtonsView = styled.View`
  flex-direction: row;
  margin: 16px;
  margin-top: 45px;
`;

const SettingsView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ProfileHeader = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ProfileHeaderViews>
      <ProfileCover>
        <Cover>
          <ProfileHeaderViews>
            <NavigationButtonsView>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="navigate-before"
                  iconType={IconTypes.MaterialIcons}
                  size={24}
                  color={theme.colors.ui.primaryTransparent}
                  onPress={() => navigation.goBack()}
                />
              </TouchableOpacity>
              <SettingsView>
                <Icon
                  name="settings"
                  iconType={IconTypes.Feather}
                  size={24}
                  color={theme.colors.ui.primaryTransparent}
                />
              </SettingsView>
            </NavigationButtonsView>
          </ProfileHeaderViews>
        </Cover>
      </ProfileCover>
      <ProfileAvatar
        source={require("../../../../assets/profile_picture.png")}
      />
      <ProfileNameView>
        <ProfileNameText>Amanda Smith</ProfileNameText>
        <UserNameText>@amandasmith</UserNameText>
      </ProfileNameView>
    </ProfileHeaderViews>
  );
};
