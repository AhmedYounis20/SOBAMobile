import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Checkbox } from "react-native-paper";
import { View, TouchableOpacity, Text, Keyboard } from "react-native";

import {
  AuthButton,
  AuthButtonView,
  ErrorContainer,
  FirstPlant,
  ForgotText,
  FormView,
  FourthPlant,
  Input,
  InputFieldView,
  InputFieldsView,
  LoginBackGround,
  PasswordInput,
  PlantsView,
  RememberForgotView,
  RememberText,
  SecondPlant,
  ThirdPlant,
  Title,
  TitleView,
  WelocomeText,
} from "../components/account.styles";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { CenterRow } from "../../welcome/components/welcome.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ScreenView } from "../../../components/views/screenView.component";
import { Icon, IconTypes } from "../../../components/Icons/Icons.components";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const { onLogin, error, isLoading, setError } = useContext(
    AuthenticationContext
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  useEffect(() => setError(null), []);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <ScreenView>
      <LoginBackGround>
        <PlantsView>
          <FirstPlant
            source={require("../../../../assets/images/account/plants/plant1.png")}
            resizeMode="contain"
            resizeMethod="scale"
          />
          <SecondPlant
            source={require("../../../../assets/images/account/plants/plant2.png")}
            resizeMode="contain"
            resizeMethod="scale"
          />
          <ThirdPlant
            source={require("../../../../assets/images/account/plants/plant3.png")}
            resizeMode="contain"
            resizeMethod="scale"
          />
          <FourthPlant
            source={require("../../../../assets/images/account/plants/plant4.png")}
            resizeMode="contain"
            resizeMethod="scale"
          />
        </PlantsView>
        <FormView>
          <TitleView>
            <Title>Log in</Title>
            <WelocomeText>Hello! welcome back! 👋🏻</WelocomeText>
          </TitleView>
          <Spacer position={"top"} size={"xl"} />
          <InputFieldsView>
            <InputFieldView>
              <Input
                label={"User Name"}
                secureTextEntry={true}
                onChangeText={(input) => setEmail(input)}
                textContentType="emailAddress"
                keyboardType="email-address"
              />
            </InputFieldView>
            <View style={{ alignSelf: "flex-start", left: 10 }}>
              {error &&
                error.UserName &&
                error.UserName.map((item, index) => {
                  return (
                    <Text
                      key={index}
                      style={{ color: "red", fontWeight: "bold" }}
                    >
                      {item}
                    </Text>
                  );
                })}
            </View>
            <Spacer position={"top"} size={"large"} />
            <InputFieldView>
              <PasswordInput
                label={"Password"}
                secureTextEntry={!showPassword}
                onChangeText={(input) => setPassword(input)}
              />
              <TouchableOpacity onPress={() => togglePassword()}>
                <Icon
                  iconType={IconTypes.Entypo}
                  name={showPassword ? "eye" : "eye-with-line"}
                  size={30}
                />
              </TouchableOpacity>
            </InputFieldView>
            <View style={{ alignSelf: "flex-start", left: 10 }}>
              {error &&
                error.Password &&
                error.Password.map((item, index) => {
                  return (
                    <Text
                      key={index}
                      style={{ color: "red", fontWeight: "bold" }}
                    >
                      {item}
                    </Text>
                  );
                })}
            </View>
            <View style={{ alignSelf: "flex-start", left: 10 }}>
              {error &&
                error.errors &&
                error.errors.map((item, index) => {
                  return (
                    <Text
                      key={index}
                      style={{ color: "red", fontWeight: "bold" }}
                    >
                      {`\u2022`}
                      {item}
                    </Text>
                  );
                })}
            </View>
            <Spacer position={"top"} size={"large"} />

            <RememberForgotView>
              <CenterRow>
                <Checkbox
                  status={rememberMe ? "checked" : "unchecked"}
                  onPress={() => {
                    setRememberMe(!rememberMe);
                  }}
                />
                <RememberText>Remember me</RememberText>
              </CenterRow>
              <View style={{ alignSelf: "center" }}>
                <ForgotText>Forgot password</ForgotText>
              </View>
            </RememberForgotView>
            <Spacer position={"top"} size={"xl"} />
            <Spacer position={"top"} size={"large"} />
            <AuthButtonView>
              {!isLoading ? (
                <AuthButton
                  icon="lock-open-outline"
                  mode={"contained"}
                  onPress={() => {
                    onLogin(email, password, rememberMe);
                    Keyboard.dismiss();
                  }}
                >
                  LOGIN
                </AuthButton>
              ) : (
                <ActivityIndicator animating={true} color={Colors.blue300} />
              )}
            </AuthButtonView>
          </InputFieldsView>
          <Spacer position={"top"} size={"xl"} />
          <Spacer position={"top"} size={"xl"} />

          <CenterRow style={{ alignSelf: "center" }}>
            <Text style={{ color: "#000000", fontSize: 12, fontWeight: 300 }}>
              Don't have an account?{"    "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("register")}>
              <Text
                style={{
                  color: "#000000",
                  fontWeight: 700,
                  fontSize: 15,
                  top: -2,
                }}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </CenterRow>
        </FormView>
      </LoginBackGround>
      <View style={{ marginTop: 50, left: 20, position: "absolute" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>
            <Icon
              iconType={IconTypes.AntDesign}
              name="leftcircleo"
              size={30}
              color="#FFFFFF"
            />
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenView>
  );
};
