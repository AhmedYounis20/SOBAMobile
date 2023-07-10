import {
  AuthButton,
  AuthButtonView,
  FirstPlant,
  FormView,
  FourthPlant,
  Input,
  InputFieldView,
  InputFieldsView,
  LoginBackGround,
  PasswordInput,
  PlantsView,
  SecondPlant,
  ThirdPlant,
  Title,
  TitleView,
  WelocomeText,
} from "../components/account.styles";
import { ActivityIndicator } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Keyboard, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Icon, IconTypes } from "../../../components/Icons/Icons.components";
import { CenterRow } from "../../welcome/components/welcome.styles";
import { ScreenView } from "../../../components/views/screenView.component";

export const RegisterScreen = ({ navigation }) => {
  const { error, isLoading, onRegister, setError } = useContext(
    AuthenticationContext
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef(null);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordConfirmation = () => {
    setShowPasswordConfirmation(!showPasswordConfirmation);
  };

  useEffect(() => setError(null), []);
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
            <Title>Sign up</Title>
            <WelocomeText>Be part of our community now!</WelocomeText>
          </TitleView>
          <Spacer position={"top"} size={"xl"} />
          <InputFieldsView>
            {/* <InputFieldView>
              <Input
                label={"Username"}
                secureTextEntry={true}
                onChangeText={(input) => setPassword(input)}
                textContentType="username"
              />
            </InputFieldView>
            <Spacer position={"top"} size={"large"} /> */}
            <InputFieldView>
              <Input
                label={"Email address"}
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
                ref={passwordRef}
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
            <Spacer position={"top"} size={"large"} />
            <InputFieldView>
              <PasswordInput
                label={"Confirm password"}
                secureTextEntry={!showPasswordConfirmation}
                onChangeText={(input) => setPasswordConfirmation(input)}
              />
              <TouchableOpacity onPress={() => togglePasswordConfirmation()}>
                <Icon
                  iconType={IconTypes.Entypo}
                  name={showPasswordConfirmation ? "eye" : "eye-with-line"}
                  size={30}
                />
              </TouchableOpacity>
            </InputFieldView>
            <View style={{ alignSelf: "flex-start", left: 10 }}>
              {error &&
                error.PasswordConfirm &&
                error.PasswordConfirm.map((item, index) => {
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
            <Spacer position={"top"} size={"xl"} />
            <AuthButtonView>
              {!isLoading ? (
                <AuthButton
                  mode={"contained"}
                  onPress={() => {
                    onRegister(email, password, passwordConfirmation);
                    Keyboard.dismiss();
                  }}
                >
                  Create an account
                </AuthButton>
              ) : (
                <ActivityIndicator animating={true} color={Colors.blue300} />
              )}
            </AuthButtonView>
          </InputFieldsView>
          <Spacer position={"top"} size={"xl"} />

          {/* <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <View style={{ width: 90 }}>
              <HairLine />
            </View>
            <View style={{ marginHorizontal: 15 }}>
              <Text style={{ fontSize: 15, top: -5, color: "black" }}>
                or sign up with
              </Text>
            </View>
            <View style={{ width: 90 }}>
              <HairLine />
            </View>
          </View>
          <Spacer position={"top"} size={"xl"} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity>
              <View
                style={{
                  width: 100,
                  borderColor: "black",
                  borderWidth: 2,
                  height: 50,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  iconType={IconTypes.MaterialIcons}
                  name="facebook"
                  size={40}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  width: 100,
                  borderColor: "black",
                  borderWidth: 2,
                  height: 50,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  iconType={IconTypes.MaterialCommunityIcons}
                  name="twitter"
                  size={40}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  width: 100,
                  borderColor: "black",
                  borderWidth: 2,
                  height: 50,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  iconType={IconTypes.MaterialCommunityIcons}
                  name="google"
                  size={40}
                />
              </View>
            </TouchableOpacity>
          </View> */}
          <Spacer position={"top"} size={"xl"} />
          <CenterRow style={{ alignSelf: "center" }}>
            <Text style={{ color: "#000000", fontSize: 12, fontWeight: 300 }}>
              Already have an account?{"    "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
              <Text
                style={{
                  color: "#000000",
                  fontWeight: 700,
                  fontSize: 15,
                  top: -2,
                }}
              >
                Log in
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
