import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { TextInput,ActivityIndicator } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { SafeArea } from "../../../components/SafeArea/SafeArea.Component";
import LottieView from "lottie-react-native"
export const LoginScreen = ({ navigation }) => {
  const { onLogin, error,isLoading,isAuthenticated } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  return (
      <AccountBackground>
          <AccountCover >
        {/* <LottieView
        key="animation"
        autoPlay
        source={require("../../../../assets/login_bg.json")}
        resizeMode="cover"
        /> */}
        </AccountCover>
        <AccountContainer style={{ width: "80%" }}>
          <TextInput
            label={"Email"}
            onChangeText={(input) => setEmail(input)}
            keyboardType="email-address"
            textContentType="emailAddress"
            outlineStyle={{borderRadius:100}}
            underlineStyle={{borderRadius:100}}
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
      </AccountBackground>
  );
};
