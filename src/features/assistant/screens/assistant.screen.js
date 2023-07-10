import { NotificationScreen } from "../../notifications/screens/notifications.screen";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import {
  Background,
  DiscribtionContainer,
  DiscribtionInputFieldContainer,
  FieldContainer,
  FieldTextContainer,
  InputLabel,
  ItemsCenter,
  SendContainer,
  SendText,
  SentBox,
  SuccessfullySentContainer,
  SuccessfullySentOk,
  SuccessfullySentText,
  SupportTitle,
  InputFieldContainer,
} from "../components/assistant.styles";

export const AssistantScreen = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDiscription] = useState("");
  const [isSent, setIsSent] = useState(false);
  const handleSubmit = async () => {
    console.log(`${email} ${subject} ${description}`);
    handleSent();
  };
  const handleSent = () => {
    setIsSent(!isSent);
  };
  return (
    <View style={{ flex: 1 }}>
      {isSent && (
        <SentBox>
          <View style={{ alignSelf: "center" }}>
            <SuccessfullySentContainer>
              <SuccessfullySentText>Successfully Sent</SuccessfullySentText>
            </SuccessfullySentContainer>
            <ItemsCenter>
              <TouchableOpacity onPress={handleSent}>
                <SuccessfullySentOk>OK</SuccessfullySentOk>
              </TouchableOpacity>
            </ItemsCenter>
          </View>
        </SentBox>
      )}

      <Background>
        <SupportTitle>Support</SupportTitle>
      </Background>
      <View style={{ alignSelf: "center" }}>
        <MaterialIcons name="support-agent" size={100} color="#27AE60" />
      </View>
      <FieldContainer>
        <FieldTextContainer>
          <InputLabel>Your Email Address</InputLabel>
          <FontAwesome name="star" size={8} color="red" />
        </FieldTextContainer>

        <InputFieldContainer>
          <TextInput
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
            style={{
              height: 20,
              margin: 12,
              borderWidth: 1,
              borderColor: "transparent",
              color: "black",
            }}
          />
        </InputFieldContainer>
      </FieldContainer>
      <FieldContainer>
        <FieldTextContainer>
          <InputLabel>Subject</InputLabel>
          <FontAwesome name="star" size={8} color="red" />
        </FieldTextContainer>

        <InputFieldContainer>
          <TextInput
            placeholder="Email Subject"
            value={subject}
            onChangeText={setSubject}
            style={{
              height: 20,
              margin: 12,
              borderWidth: 1,
              borderColor: "transparent",
              color: "black",
            }}
          />
        </InputFieldContainer>
      </FieldContainer>
      <DiscribtionContainer>
        <FieldTextContainer>
          <InputLabel>Description</InputLabel>
          <FontAwesome name="star" size={8} color="red" />
        </FieldTextContainer>

        <DiscribtionInputFieldContainer>
          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={setDiscription}
            style={{
              height: 20,
              margin: 12,
              borderWidth: 1,
              borderColor: "transparent",
              color: "black",
            }}
          />
        </DiscribtionInputFieldContainer>
      </DiscribtionContainer>

      <FieldContainer>
        <SendContainer onPress={handleSubmit}>
          <SendText>Send</SendText>
        </SendContainer>
      </FieldContainer>
    </View>
  );
};
