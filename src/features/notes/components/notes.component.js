import {
  Modal,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";

import {
  NotesView,
  NotesTitle,
  NotesList,
  NoteItem,
  NoteView,
  NoteText,
  NoteTime,
  AddNoteButton,
  ModalContainer,
  ModalCard,
  AddText,
  ModalInput,
  ModalButtonContainer,
  SaveButton,
  CancelButton,
} from "./notes.styles";
import { Button } from "react-native-paper";
import { Icon, IconTypes } from "../../../components/Icons/Icons.components";
import { ThemeContext } from "../../../services/ThemeContext/Theme.context";

export const NotesComponent = () => {
  const { theme } = useContext(ThemeContext);
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleNoteChange = (text) => {
    setNote(text);
  };

  const handleSaveNote = () => {
    const now = new Date();
    const options = {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const time = now.toLocaleTimeString("en-us", options);
    const newNote = { text: note, time: time };
    setNotes([newNote, ...notes]);
    setNote("");
    setModalVisible(false);
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <>
      <NotesView>
        <NotesTitle>Notes</NotesTitle>
        <NotesList showsVerticalScrollIndicator={false}>
          {notes.map((note, index) => (
            <NoteItem key={index}>
              <NoteView>
                <NoteTime>{note.time}</NoteTime>
                <NoteText>{note.text}</NoteText>
              </NoteView>
              <TouchableOpacity onPress={() => handleDeleteNote(index)}>
                <Icon
                  name="delete"
                  iconType={IconTypes.MaterialIcons}
                  size={24}
                  color={theme.colors.ui.error}
                />
              </TouchableOpacity>
            </NoteItem>
          ))}
        </NotesList>
        <AddNoteButton
          icon="plus-circle"
          mode="contained"
          onPress={() => setModalVisible(true)}
        >
          Add Note
        </AddNoteButton>
      </NotesView>
      <Modal transparent visible={modalVisible} animationType="fade">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={{ flex: 1 }}
        >
          <ModalContainer>
            <ModalCard>
              <AddText>Add Note</AddText>
              <ModalInput
                mode="outlined"
                placeholder="Type your note here"
                multiline={true}
                numberOfLines={2}
                value={note}
                textColor={theme.colors.text.primary}
                outlineColor={theme.colors.ui.disabled}
                activeOutlineColor={theme.colors.ui.outlineActive}
                onChangeText={handleNoteChange}
              />
              <ModalButtonContainer>
                <CancelButton
                  mode="contained"
                  icon="cancel"
                  onPress={() => {
                    setModalVisible(false);
                    setNote("");
                  }}
                >
                  Cancel
                </CancelButton>
                <SaveButton
                  mode="contained"
                  icon="content-save"
                  onPress={handleSaveNote}
                >
                  Save
                </SaveButton>
              </ModalButtonContainer>
            </ModalCard>
          </ModalContainer>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
};
