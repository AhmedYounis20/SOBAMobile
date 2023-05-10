import styled from "styled-components";
import { InfoRow } from "./inforow.component";
import { View, StyleSheet } from "react-native";
import { HairLine } from "../../../components/hairlines/hairline.component";

const ProfileContentView = styled.View`
  margin-top: 16px;
`;

const InfoDataView = styled.View``;

export const ProfileContent = ({ infoList }) => {
  return (
    <ProfileContentView>
      {infoList.map((item, index) => (
        <InfoDataView key={index}>
          <InfoRow property={item.property} value={item.value} />
          {index !== infoList.length - 1 && (
           <HairLine/>
          )}
        </InfoDataView>
      ))}
    </ProfileContentView>
  );
};
