import React, { useContext } from "react"
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { AntDesign } from "@expo/vector-icons";

const FavouriteButton=styled(TouchableOpacity)`
    position:absolute;
    top:25px;
    right:25px;
    z-index:9;
`;
export const Favourite=({restaurant})=>{
const {addToFavourites,removeFromFavourites,favourites} = useContext(FavouritesContext);
const isFavourite= favourites.find((r)=>r.placeId==restaurant.placeId);
const change=()=>{
    if(isFavourite) removeFromFavourites(restaurant);
    else addToFavourites(restaurant);
}
return <FavouriteButton onPress={change}>
    <AntDesign
        name={isFavourite ? "heart":"hearto"}
        size={24}
        color={isFavourite ? "red":"white"}
    />
</FavouriteButton>


}