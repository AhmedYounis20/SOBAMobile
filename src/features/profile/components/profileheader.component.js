import styled from "styled-components";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { ImageBackground, Image } from "react-native";

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
  return (
    <ProfileHeaderViews>
      <ProfileCover>
        <Cover>
          <ProfileHeaderViews>
            <NavigationButtonsView>
              <MaterialIcons
                name="navigate-before"
                size={24}
                color="white"
                onPress={() => navigation.goBack()}
              />
              <SettingsView>
                <Feather name="settings" size={24} color="white" />
              </SettingsView>
            </NavigationButtonsView>
          </ProfileHeaderViews>
        </Cover>
      </ProfileCover>
      <ProfileAvatar
        // source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
        source={require("../../../../assets/profile_picture.png")}
      />
      <ProfileNameView>
        <ProfileNameText>Amanda Smith</ProfileNameText>
        <UserNameText>@amandasmith</UserNameText>
      </ProfileNameView>
    </ProfileHeaderViews>
  );
};
