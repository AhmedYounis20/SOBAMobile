import React, { useState, useEffect, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from "../authentication/authentication.context";


export const FavouritesContext = React.createContext();
export const FavouritesContextProvider = ({children}) => {
  const [favourites, setFavourites] = useState([]);
  const {user} =useContext(AuthenticationContext);
  const Add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };
  const Remove = (restaurant) => {
    newfavs = favourites.filter((x) => x.placeId !== restaurant.placeId);
    setFavourites(newfavs);
  };

  const saveFavourites = async (value) => {
    try {
      const jsonValue=JSON.stringify(value)
      await AsyncStorage.setItem(`@favourites-${user.uid}`, jsonValue);
    } catch (error) {
        console.log(error)
    }
  }
  const getfavourites = async () => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${user.uid}`);
      if(value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch(error) {
      console.log(error);
    }
  }
  useEffect(()=>{getfavourites();},[]);
  useEffect(()=>{saveFavourites(favourites);},[favourites]);
  return (
    <FavouritesContext.Provider
      value={{
        favourites: favourites,
        addToFavourites: Add,
        removeFromFavourites: Remove,
      }}
    >{children}</FavouritesContext.Provider>
  );
};
