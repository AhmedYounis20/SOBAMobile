import React, { useState, useEffect } from "react";
import {  Platform } from "react-native";
import styled from "styled-components";
import WebView from "react-native-webview";
import { Text } from "react-native";

const CompactImage = styled.Image`
  border-radius: 20px;
  width: 120px;
  height: 120px;
`;
const CompactWebView = styled(WebView)`
border-radius: 20px;
width: 120px;
height: 120px;
`;
const Item = styled.View`
  padding: 10px;
  max-width: 200px;
  align-items: center;
`;

const isAndroid= Platform.OS==="android";
export const CompactRestaurantInfo = ({ restaurant,isMap=false }) => {
    const Image= (isAndroid && isMap  ? CompactWebView:CompactImage);
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text>{restaurant.name}</Text>
    </Item>
  );
};
