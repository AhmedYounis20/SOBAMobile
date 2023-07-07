import { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../../services/ThemeContext/Theme.context";
import { Icon, IconTypes } from "../../../components/Icons/Icons.components";

const InfoRowView = styled.View`
  flex-direction: row;
  margin: 16px;
  align-items: center;
  gap: 10px;
`;

const InfoIconView = styled.View`
  justify-content: center;
`;

const InfoIconContainer = styled(InfoIconView)`
  width: 32px;
  align-items: center;
  justify-content: center;
`;

const InfoDataView = styled.View`
  margin-left: 8px;
`;

const PropertyText = styled.Text`
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.text.disabled};
`;

const ValueText = styled.Text`
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.text.whiteBlack};
`;

const InfoRowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ArrowContainer = styled.View`
  margin-right: 5%;
`;

const getIcon = (property, theme) => {
  switch (property) {
    case "Email":
      return (
        <Icon
          iconType={IconTypes.MaterialCommunityIcons}
          name="email-outline"
          size={32}
          color={theme.colors.ui.primary}
        />
      );
    case "Telephone":
      return (
        <Icon
          iconType={IconTypes.Foundation}
          name="telephone"
          size={32}
          color={theme.colors.ui.primary}
        />
      );
    case "Twitter":
      return (
        <Icon
          iconType={IconTypes.AntDesign}
          name="twitter"
          size={32}
          color={theme.colors.ui.primary}
        />
      );
    case "Location":
      return (
        <Icon
          iconType={IconTypes.Entypo}
          name="location-pin"
          size={32}
          color={theme.colors.ui.primary}
        />
      );
    case "Arrow":
      return (
        <Icon
          iconType={IconTypes.Entypo}
          name="chevron-right"
          size={32}
          color={theme.colors.ui.primary}
        />
      );
    default:
      return (
        <Icon
          iconType={IconTypes.Feather}
          name="info"
          size={32}
          color={theme.colors.ui.primary}
        />
      );
  }
};

export const InfoRow = ({ property, value }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <InfoRowContainer>
      <InfoRowView>
        <InfoIconContainer>
          <InfoIconView>{getIcon(property, theme)}</InfoIconView>
        </InfoIconContainer>

        <InfoDataView>
          <PropertyText>{property}</PropertyText>
          <ValueText>{value}</ValueText>
        </InfoDataView>
      </InfoRowView>
      <ArrowContainer>
        <InfoIconView>{getIcon("Arrow", theme)}</InfoIconView>
      </ArrowContainer>
    </InfoRowContainer>
  );
};
