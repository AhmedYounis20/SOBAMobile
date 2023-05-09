import styled from "styled-components";
import { Ionicons, Feather } from "@expo/vector-icons";
import { ImageBackground, SafeAreaView, Image } from "react-native";

const ProfileHeaderViews = styled.View``;

const ProfileCover = styled.View`
  height: 180px;
  background-color: blue;
`;

const CoverImage = styled(ImageBackground)`
  flex: 1;
`;

const ProfileAvatar = styled(Image)`
  width: 89px;
  height: 89px;
  border-radius: 45px;
  border-width: 4px;
  border-color: white;
  margin-top: 120px;
  margin-left: 16px;
  position: absolute;
`;

const ProfileNameView = styled.View`
  margin-top: 32px;
  margin-left: 16px;
`;

const ProfileNameText = styled.Text`
  font-family: ${(props) => props.theme.fonts.profileName};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const UserNameText = styled.Text`
  font-family: ${(props) => props.theme.fonts.username};
`;

const NavigationButtonsView = styled.View`
  flex-direction: row;
  margin: 16px;
`;

const SettingsView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ProfileHeader = () => {
  return (
    <ProfileHeaderViews>
      <ProfileCover>
        <CoverImage
          source={require("../../../../assets/profile_background.png")}
        >
          <SafeAreaView>
            <NavigationButtonsView>
              <Ionicons name="arrow-back-outline" size={24} color="white" />
              <SettingsView>
                <Feather name="settings" size={24} color="white" />
              </SettingsView>
            </NavigationButtonsView>
          </SafeAreaView>
        </CoverImage>
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
