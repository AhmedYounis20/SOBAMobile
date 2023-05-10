import { Modal, Keyboard, ScrollView } from "react-native";
import { Text } from "../../../components/typography/text.component";
import React, { useState } from "react";

import {
  NotesCard,
  NotesList,
  NoteItem,
  NoteText,
  NoteTime,
  AddNoteButton,
  ModalContainer,
  ModalCard,
  ModalInput,
  ModalButtonContainer,
  SaveButton,
  CancelButton,
} from "./notes.styles";

export const Notes = () => {
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
    setNotes([...notes, newNote]);
    setNote("");
    setModalVisible(false);
  };

  const handleModalKeyPress = ({ nativeEvent }) => {
    if (nativeEvent.key === "Enter") {
      Keyboard.dismiss();
    }
  };

  return (
    <>
      <NotesCard>
        <Text>Notes</Text>
        <NotesList>
          {notes.map((note, index) => (
            <NoteItem key={index}>
              <NoteTime>{note.time}</NoteTime>
              <NoteText>{note.text}</NoteText>
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
      </NotesCard>
      <Modal visible={modalVisible} animationType="slide">
        <ModalContainer>
          <ModalCard>
            <Text>Add Note</Text>
            <ModalInput
              placeholder="Type your note here"
              multiline={true}
              numberOfLines={4}
              value={note}
              onChangeText={handleNoteChange}
              onKeyPress={handleModalKeyPress}
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
      </Modal>
    </>
  );
};
