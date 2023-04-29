import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AnimationWrapper,
  AuthButton,
  Title,
} from "../component/account.styles";
import { Spacer } from "../../../Components/spacer/spacer.component";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
export const AccountScreen = ({ navigation }) => (
  <>
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
      <LottieView
        key="animation"
        autoPlay
        source={require("../../../../assets/watermelon.json")}
        resizeMode="cover"
        />
        </AnimationWrapper>
      <Title>MealsToGo</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode={"contained"}
          onPress={() => navigation.navigate("login")}
        >
          LOGIN
        </AuthButton>
        <Spacer position={"top"} size={"large"} />
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
          onPress={() => navigation.navigate("register")}
        >
          REGISTER
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  </>
);
