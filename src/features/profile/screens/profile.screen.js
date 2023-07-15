import { useContext } from "react";
import styled from "styled-components";
import { ProfileHeader } from "../components/profileheader.component";
import { ProfileContent } from "../components/profilecontent.component";
import { ThemeContext } from "../../../services/ThemeContext/Theme.context";

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
    value: "Egypt,Tanta",
  },
];

export const ProfileScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ProfileView>
      <ProfileHeader navigation={navigation} />
      <ProfileContent infoList={infoList} />
    </ProfileView>
  );
};
