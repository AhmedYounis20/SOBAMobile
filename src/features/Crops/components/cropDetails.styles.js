import styled from "styled-components";

export const CropDetailsItemView = styled.View`
  height: 80px;
  width: 95%;
  border-radius: 20px;
  margin-vertical: 5px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  background-color: ${(props) => props.theme.colors.ui.primary};
`;
export const DataText = styled.Text`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 14px;
  color: ${(props) => props.theme.colors.text.white};
  font-weight: bold;
  margin-left: 20px;
`;
export const SecondaryNoteText = styled.Text`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 14px;
  color: ${(props) => props.theme.colors.text.white};
  margin-left: 20px;
`;
export const MainDataView = styled.View`
  width: 55%;
`;
export const SecondaryNotesView = styled.View`
  width: 30%;
`;
export const ImageView = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.4);
  align-items: center;
  justify-content: center;
`;
export const ScrollContainer = styled.ScrollView`
  margin-vertical: 10px;
  border-radius: 20px;
  width: 95%;
  height: 90%;
`;
export const ImageContainer = styled.View`
  height: 300px;
  width: 95%;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;
export const MainImage = styled.Image`
  width: 300px;
  height: 100%;
`;
export const CropTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  font-style: italic;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const NavigationView = styled.View`
  width: 90%;
  border-radius: 50px;
  height: 70px;
  flex-direction: row;
  padding-horizontal: 5%;
  align-items: center;
  justify-content: center;
  border-color: rgba(0, 0, 0, 0.1);
  border-width: 1px;
`;
export const ScreenConatiner = styled.View`
  align-items: center;
  padding-bottom: 20px;
  padding-top: 40px;
  backgroun-dolor: ${(props) => props.theme.colors.text.primary};
`;
export const DetailsContainer = styled.View`
  margin-vertical: 10px;
  border-radius: 20px;
  width: 95%;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  margin-vertical: 10px;
`;
export const DetailsText = styled.Text`
  margin-horizontal: 15px;
  margin-vertical: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.primary};
`;
export const CropDetailsContainer = styled.View`
  margin-vertical: 10px;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  justify-content: space-between;
  border-radius: 20px;
`;
export const CropItemsImage = styled.Image`
  height: 25px;
  width: 25px;
`;
export const TitleContainer = styled.View`
  width: 100%;
  padding: 10px;
  paddingleft: 20px;
`;
export const StatisticsContainer = styled.View`
  margin-vertical: 10px;
  border-radius: 20px;
  width: 95%;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;
export const StatisticsTitle = styled.Text`
  margin-horizontal: 15px;
  margin-vertical: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.primary};
`;
export const ChartContainer = styled.View`
  margin-vertical: 10px;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  justify-content: space-between;
  border-radius: 20px;
`;
export const CropRequirementsContainer = styled.View`
  margin-vertical: 10px;
  border-radius: 20px;
  width: 95%;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  margin-vertical: 10px;
`;
export const CropRequirementsTitle = styled.Text`
  margin-horizontal: 15px;
  margin-vertical: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.primary};
`;
export const RequirementitemContainer = styled.View`
  margin-vertical: 10px;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  justify-content: space-between;
  border-radius: 20px;
`;
