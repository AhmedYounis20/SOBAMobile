import styled from "styled-components";
import { View, StyleSheet } from "react-native";
import { InfoRow } from "./inforow.component";

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
            <View
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: StyleSheet.hairlineWidth,
                width: "90%",
                alignSelf: "center",
              }}
            />
          )}
        </InfoDataView>
      ))}
    </ProfileContentView>
  );
};
