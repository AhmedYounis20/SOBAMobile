import styled from "styled-components";
import { StatusBar } from "react-native";
import { Text } from "../../../components/typography/text.component";

const ProfileView = styled.View`
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

export const Profile = () => {
  return (
    <ProfileView>
      
      <Text>profile</Text>
    </ProfileView>
  );
};
