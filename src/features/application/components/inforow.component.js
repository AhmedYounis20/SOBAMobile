import styled from "styled-components";
import {
  MaterialCommunityIcons,
  Foundation,
  Feather,
  AntDesign,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";

const InfoRowView = styled.View`
  flex-direction: row;
  margin: 16px;
`;

const InfoIconView = styled.View`
  justify-content: center;
`;

const InfoDataView = styled.View`
  margin-left: 8px;
`;

const PropertyText = styled.Text`
  font-family: ${(props) => props.theme.fonts.username};
  color: gray;
`;

const ValueText = styled.Text`
  font-family: ${(props) => props.theme.fonts.username};
`;

const getIcon = (property) => {
  switch (property) {
    case "Email":
      return (
        <MaterialCommunityIcons name="email-outline" size={32} color="gray" />
      );
    case "Mobile":
      return <Foundation name="telephone" size={32} color="gray" />;
    case "Twitter":
      return <AntDesign name="twitter" size={32} color="gray" />;
    case "Behance":
      return <Entypo name="behance" size={32} color="gray" />;
    case "Facebook":
      return <FontAwesome5 name="facebook" size={32} color="gray" />;
    default:
      return <Feather name="info" size={32} color="gray" />;
  }
};

export const InfoRow = ({ property, value }) => {
  return (
    <InfoRowView>
      <InfoIconView>{getIcon(property)}</InfoIconView>
      <InfoDataView>
        <PropertyText>{property}</PropertyText>
        <ValueText>{value}</ValueText>
      </InfoDataView>
    </InfoRowView>
  );
};
