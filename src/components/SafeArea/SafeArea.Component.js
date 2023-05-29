import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";
import { View } from "react-native";
export const Safe = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};`;

export const SafeArea = ({ children }) => {
  return(
    <Safe>
      <View style={{height:"50%",flexDirection:"column",backgroundColor:"gray",zIndex:2,borderBottomLeftRadius:20,borderBottomEndRadius:20}}/>
<View style={{zIndex:3,position:"absolute",flex:1,height:"100%"}}>

      {children}
</View>
      </Safe>);
};
