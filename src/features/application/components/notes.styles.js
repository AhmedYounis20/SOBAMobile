import { Card, TextInput, Button } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components";

export const NotesCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[3]};
`;

export const NotesList = styled.ScrollView`
  margin: ${(props) => props.theme.space[2]};
  height: 200px;
`;

export const NoteItem = styled.View`
  margin-bottom: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
  border-radius: 16px;
`;

export const NoteText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const NoteTime = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
  margin-top: ${(props) => props.theme.space[1]};
`;

export const AddNoteButton = styled(Button)`
  background-color: black;
  margin-top: ${(props) => props.theme.space[2]};
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const ModalInput = styled(TextInput)`
  margin: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[2]};
  font-size: ${(props) => props.theme.fontSizes.body};
  background-color: ${(props) => props.theme.colors.bg.secondary};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const ModalButtonContainer = styled.View`
  margin-top: ${(props) => props.theme.space[2]};
  flex-direction: row;
  justify-content: flex-end;
`;

export const SaveButton = styled(Button)`
  margin-left: ${(props) => props.theme.space[2]};
  background-color: green;
`;

export const CancelButton = styled(Button)`
  margin-left: ${(props) => props.theme.space[2]};
  background-color: red;
`;
