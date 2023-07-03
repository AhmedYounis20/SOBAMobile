import styled from "styled-components";
import {
  MaterialCommunityIcons,
  Foundation,
  Feather,
  AntDesign,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";
import { View } from "react-native";
import { Text } from "react-native";

const InfoRowView = styled.View`
  flex-direction: row;
  margin: 16px;
  align-items: center;
`;

const InfoIconView = styled.View`
  justify-content: center;
`;

const InfoIconContainer = styled(InfoIconView)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  shadow-color: #dbd7d7;
  background-color: #f5f5f5;
`;

const InfoDataView = styled.View`
  margin-left: 8px;
`;

const PropertyText = styled.Text`
  font-family: ${(props) => props.theme.fonts.text};
  color: gray;
`;

const ValueText = styled.Text`
  font-family: ${(props) => props.theme.fonts.text};
`;

const InfoRowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ArrowContainer = styled.View`
  margin-right: 5%;
`;

const getIcon = (property) => {
  switch (property) {
    case "Email":
      return (
        <MaterialCommunityIcons
          name="email-outline"
          size={32}
          color="#27AE60"
        />
      );
    case "Telephone":
      return <Foundation name="telephone" size={32} color="#27AE60" />;
    case "Twitter":
      return <AntDesign name="twitter" size={32} color="gray" />;
    case "Location":
      return <Entypo name="location-pin" size={32} color="#27AE60" />;
    case "Arrow":
      return <Entypo name="chevron-right" size={32} color="black" />;
    default:
      return <Feather name="info" size={32} color="gray" />;
  }
};

export const InfoRow = ({ property, value }) => {
  return (
    <InfoRowContainer>
      <InfoRowView>
        <InfoIconContainer elevation={3}>
          <InfoIconView>{getIcon(property)}</InfoIconView>
        </InfoIconContainer>

        <InfoDataView>
          <PropertyText>{property}</PropertyText>
          <ValueText>{value}</ValueText>
        </InfoDataView>
      </InfoRowView>
      <ArrowContainer>
        <InfoIconView>{getIcon("Arrow")}</InfoIconView>
      </ArrowContainer>
    </InfoRowContainer>
  );
};
