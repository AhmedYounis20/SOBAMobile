import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { DiseaseDetectionScreen } from "../../features/diseasedetector/Screens/DiseaseDetection.Screen";
import { DetectionResultScreen } from "../../features/diseasedetector/Screens/DetectionResult.Screen";
import { CameraComponent } from "../../features/diseasedetector/components/camera.component";
import { DisDetectFirstPage } from "../../features/diseasedetector/Screens/FirstGuidePage.screen";
import { DisDetectSecondPage } from "../../features/diseasedetector/Screens/SecondGuidePage.screen";

const DiseaseDetectorStack = createStackNavigator();
export const DiseaseDetectorNavigator = () => {
  return (
    <DiseaseDetectorStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalFadeTransition,
      }}
    >
      <DiseaseDetectorStack.Screen
        name="DisDetectFirstPage"
        component={DisDetectFirstPage}
      />
      <DiseaseDetectorStack.Screen
        name="DisDetectSecondPage"
        component={DisDetectSecondPage}
      />
      <DiseaseDetectorStack.Screen
        name="DiseaseDetection"
        component={DiseaseDetectionScreen}
      />
      <DiseaseDetectorStack.Screen
        name="DetectionResult"
        component={DetectionResultScreen}
      />
      <DiseaseDetectorStack.Screen
        name="CameraScreen"
        component={CameraComponent}
      />
    </DiseaseDetectorStack.Navigator>
  );
};
