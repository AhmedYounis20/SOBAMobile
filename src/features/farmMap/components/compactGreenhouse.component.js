// import React, { useState, useEffect } from "react";
// import { Platform } from "react-native";
// import styled from "styled-components";
// import WebView from "react-native-webview";
// import { Text } from "react-native";

// const CompactImage = styled.Image`
//   border-radius: 20px;
//   width: 120px;
//   height: 120px;
// `;
// const CompactWebView = styled(WebView)`
//   border-radius: 20px;
//   width: 120px;
//   height: 120px;
// `;
// const Item = styled.View`
//   padding: 10px;
//   max-width: 200px;
//   align-items: center;
// `;

// const isAndroid = Platform.OS === "android";
// export const CompactGreenhouseInfo = ({ greenhouse, isMap = false }) => {
//   const Image = isAndroid && isMap ? CompactWebView : CompactImage;
//   const imageUri =
//     "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80";
//   return (
//     <Item>
//       <Image source={{ uri: imageUri }} />
//       <Text>{greenhouse}</Text>
//     </Item>
//   );
// };
