import styled from "styled-components";
import { React, useState,useContext } from "react";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Searchbar } from "react-native-paper";
import {TouchableOpacity} from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SearchContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const AccountIcon = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  margin-top: ${(props) => props.theme.space[3]};
`;

export const Topbar = ({nav}) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={(q) => setSearchQuery(q)}
          value={searchQuery}
        />
      </SearchContainer>
      <Spacer position="right" size="large">
        <TouchableOpacity onPress={nav.openDrawer} >
        <AccountIcon
          source={
            require("../../../../assets/profile_picture.png")
          }
          />
          </TouchableOpacity>
          
      </Spacer>
    </>
  );
};
