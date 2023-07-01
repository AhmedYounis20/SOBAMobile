import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { DiseaseDetectionScreen } from "../../features/diseasedetector/Screens/DiseaseDetection.Screen";
import { DetectionResultScreen } from "../../features/diseasedetector/Screens/DetectionResult.Screen";
import { CameraComponent } from "../../features/diseasedetector/components/camera.component";
import { FirstWelcome } from "../../features/welcome/screens/firstwelcome.screen";
import { SecondWelcome } from "../../features/welcome/screens/secondwelcome.screen";
import { ThirdWelcome } from "../../features/welcome/screens/thirdwelcome.screen";

const WelcomeStack = createStackNavigator();
export const WelcomeNavigator = () => {
  return (
    <WelcomeStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalFadeTransition,
      }}
    >
      <WelcomeStack.Screen name="welcome1" component={FirstWelcome} />
      <WelcomeStack.Screen name="welcome2" component={SecondWelcome} />
      <WelcomeStack.Screen name="welcome3" component={ThirdWelcome} />
    </WelcomeStack.Navigator>
  );
};
