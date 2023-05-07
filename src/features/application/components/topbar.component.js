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

export const Topbar = () => {
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
        <TouchableOpacity onPress={onLogout}>
        <AccountIcon
          source={{
            uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          }}
          />
          </TouchableOpacity>
          
      </Spacer>
    </>
  );
};
