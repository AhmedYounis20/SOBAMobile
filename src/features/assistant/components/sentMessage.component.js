import { Text, View, TouchableOpacity, TextInput } from "react-native";
import styled from "styled-components";

const ItemsCenter = styled.View`
  align-items: center;
`;

const SentBox = styled()`
  position: absolute;
  width: 70%;
  height: 15%;
  background-color: ${(props) => props.theme.colors.ui.primary};
  z-index: 5;
  border-radius: 12px;
  align-self: center;
  top: 35%;
  justify-content: center;
`;

const SuccessfullySentContainer = styled.View`
  align-items: center;
  padding-vertical: 5%;
`;

const SuccessfullySentText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
`;
const SuccessfullySentOk = styled.Text`
  font-size: 14px;
  font-weight: 700;
`;

const SentMessage = ({ isSent, handleSent }) => {
  return (
    <View>
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
    </View>
  );
};

export default SentMessage;
