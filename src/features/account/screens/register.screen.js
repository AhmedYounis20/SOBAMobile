import { Text } from "react-native";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
  ErrorContainer,
} from "../components/account.styles";
import { TextInput, ActivityIndicator } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Colors } from "react-native/Libraries/NewAppScreen";
export const RegisterScreen = ({ navigation }) => {
  const { error, isLoading, onRegister } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  return (
    <>
      <AccountBackground>
        <AccountCover />

        <Title>SOBA</Title>
        <AccountContainer style={{ width: "80%" }}>
          <TextInput
            label={"Email"}
            onChangeText={(input) => setEmail(input)}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <Spacer position={"top"} size={"large"} />
          <TextInput
            label={"Password"}
            secureTextEntry={true}
            onChangeText={(input) => setPassword(input)}
          />
          <Spacer position={"top"} size={"large"} />
          <TextInput
            label={"Confirm Password"}
            secureTextEntry={true}
            onChangeText={(input) => setPasswordConfirmation(input)}
          />
          <Spacer position={"top"} size={"medium"} />
          {error && (
            <>
              <ErrorContainer>
                <Text
                  variation={error}
                  style={{ color: "red", fontWeight: "bold" }}
                >
                  {error[0]}
                </Text>
              </ErrorContainer>
              <Spacer position={"top"} size={"medium"} />
            </>
          )}
          <Spacer position={"top"} size={"large"} />
          {!isLoading ? (
            <AuthButton
              icon={({ size, color }) => {
                return (
                  <MaterialCommunityIcons
                    name="account"
                    size={size}
                    color={color}
                  />
                );
              }}
              mode={"contained"}
              onPress={() => onRegister(email, password, passwordConfirmation)}
            >
              REGISTER
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </AccountContainer>
        <Spacer position={"top"} size={"xl"} />
        <AuthButton mode={"contained"} onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </AccountBackground>
    </>
  );
};
