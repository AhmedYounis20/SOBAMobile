import { Card } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components";

const NotesCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin: ${(props) => props.theme.space[2]};
`;

export const Notes = () => {
  return (
    <NotesCard>
      <Text>Notes</Text>
    </NotesCard>
  );
};
