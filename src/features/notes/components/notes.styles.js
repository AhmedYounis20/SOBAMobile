import { Card, TextInput, Button } from "react-native-paper";
import { Text } from "react-native";
import styled from "styled-components";

// background-color: ${(props) => props.theme.colors.bg.primary};
export const NotesView = styled.View`
  flex: 1;
  margin: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[4]};
`;

export const NotesList = styled.ScrollView`
  margin: ${(props) => props.theme.space[4]} ${(props) => props.theme.space[1]};
`;

export const NoteItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
  border-radius: 16px;
`;

export const NoteView = styled.View`
  flex: 1;
`;

export const NoteText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const NoteTime = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.disabled};
  margin-top: ${(props) => props.theme.space[1]};
`;

export const AddNoteButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.ui.primary};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const AddText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-family : ${(props) => props.theme.fonts.title}
  font-size: ${(props) => props.theme.fontSizes.title};
`; 

export const ModalInput = styled(TextInput)`
  margin: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[3]};
  padding: ${(props) => props.theme.space[2]};
  font-size: ${(props) => props.theme.fontSizes.body};
  background-color: ${(props) => props.theme.colors.bg.primary};
  `;
  // color: ${(props) => props.theme.colors.text.inverse};

export const ModalButtonContainer = styled.View`
  margin-top: ${(props) => props.theme.space[2]};
  flex-direction: row;
  justify-content: flex-end;
`;

export const SaveButton = styled(Button)`
  margin-left: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.ui.success};
`;

export const CancelButton = styled(Button)`
  margin-left: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.ui.error};
`;
