import styled from "styled-components";
import { StatusBar, View, StyleSheet } from "react-native";
import { ProfileHeader } from "../components/profileheader.component";
import { InfoRow } from "../components/inforow.component";

import { ProfileContent } from "../components/profilecontent.component";

const ProfileView = styled.View`
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
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

export const Profile = () => {
  return (
    <ProfileView>
      <ProfileHeader />
      <ProfileContent infoList={infoList} />
    </ProfileView>
  );
};
