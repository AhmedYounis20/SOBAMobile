import { useContext, useState,useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({isFavouritesToggled,onFavouritesToggled}) => {
  const { keyword , search } = useContext(LocationContext);
  const [searchKeyword,setSearchKeyword] = useState(keyword);
  const iconName=isFavouritesToggled ? "heart" : "heart-outline";
  console.log(iconName,isFavouritesToggled);
  useEffect(()=>{setSearchKeyword(keyword)},[keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={iconName}
        onIconPress={onFavouritesToggled}
        placeholder="search for a location.."
        value={searchKeyword}
        onSubmitEditing={()=>search(searchKeyword)
        }
        onChangeText={(text)=>setSearchKeyword(text)} />
    </SearchContainer>);
}