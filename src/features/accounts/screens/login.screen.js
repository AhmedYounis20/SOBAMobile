import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  ErrorContainer,
  Title,
} from "../component/account.styles";
import { TextInput,ActivityIndicator } from "react-native-paper";
import { Spacer } from "../../../Components/spacer/spacer.component";
import { useContext, useState } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../Components/typography/text.component";
import { Colors } from "react-native/Libraries/NewAppScreen";
export const LoginScreen = ({ navigation }) => {
  const { onLogin, error,isLoading } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <AccountBackground>
        <AccountCover />
        <Title>MealsToGo</Title>
        <AccountContainer style={{ width: "80%" }}>
          <TextInput
            label={"Email"}
            onChangeText={(input) => setEmail(input)}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <Spacer position={"top"} size={"xl"} />
          <TextInput
            label={"Password"}
            secureTextEntry={true}
            onChangeText={(input) => setPassword(input)}
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
              <Spacer position={"top"} size={"xl"} />
            </>
          )}
            {
                !isLoading ?  
                <AuthButton
                icon="lock-open-outline"
                mode={"contained"}
                onPress={() => onLogin(email, password)}
                >
            LOGIN
          </AuthButton> :
          <ActivityIndicator animating={true} color={Colors.blue300}/>
        }
        </AccountContainer>
        <Spacer position={"top"} size={"xl"} />
        <AuthButton mode={"contained"} onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </AccountBackground>
    </>
  );
};
