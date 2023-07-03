import styled from "styled-components";
import { ProfileHeader } from "../components/profileheader.component";
import { ProfileContent } from "../components/profilecontent.component";
import { Text, View } from "react-native";

const ProfileView = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const infoList = [
  {
    property: "Email",
    value: "amandasmith25@gmail.com",
  },
  {
    property: "Telephone",
    value: "01012345678",
  },

  {
    property: "Location",
    value: "www.behance.net/amandasmith25",
  },
];

export const ProfileScreen = ({ navigation }) => {
  return (
    <ProfileView>
      <ProfileHeader navigation={navigation} />
      <ProfileContent infoList={infoList} />
    </ProfileView>
  );
};
