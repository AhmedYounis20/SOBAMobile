import React, { useState, useEffect } from "react";
import { Platform } from "react-native";
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

const isAndroid = Platform.OS === "android";
export const CompactGreenhouseInfo = ({ greenhouse, isMap = false }) => {
  const Image = isAndroid && isMap ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image source={require("../../../../assets/green_house.jpg")} />
      <Text>{greenhouse}</Text>
    </Item>
  );
};
