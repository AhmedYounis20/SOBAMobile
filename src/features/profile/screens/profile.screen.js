import styled from "styled-components";
import { StatusBar } from "react-native";

import { ProfileHeader } from "../components/profileheader.component";
import { ProfileContent } from "../components/profilecontent.component";

const ProfileView = styled.View`
  // ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

const infoList = [
  {
    property: "Email",
    value: "amandasmith25@gmail.com",
  },
  {
    property: "Mobile",
    value: "01012345678",
  },
  {
    property: "Twitter",
    value: "@amanda25",
  },
  {
    property: "Behance",
    value: "www.behance.net/amandasmith25",
  },
  {
    property: "Facebook",
    value: "www.facebook.net/amandasmith25",
  },
];

export const ProfileScreen = ({navigation}) => {
  return (
    <ProfileView>
      <ProfileHeader navigation={navigation}/>
      <ProfileContent infoList={infoList} />
    </ProfileView>
  );
};
