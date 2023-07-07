import styled from "styled-components";
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
        </InfoDataView>
      ))}
    </ProfileContentView>
  );
};
